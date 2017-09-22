import { Injectable } from "@angular/core";

import Encrypter from "./Encrypter";
import LocalStorage from "./LocalStorage";

@Injectable()
export default class EncrypterHelper {
	storage: LocalStorage;
	
	constructor(private _storage: LocalStorage) {
		this.storage = _storage;
	}
	storePassword(password: any): Promise<any> {
		let { password: userPwd, name, requestAccess} = password;
		let { salt, encrypted } = Encrypter.encrypt(userPwd);

		return new Promise((resolve: Function, reject: Function) => {
			Promise.all([
				this.storage.store(`${name}__salt`, salt),
				this.storage.store(`${name}__pwd`, encrypted),
				this.storage.store(`${name}__info`, { requestAccess })
			]).then(() => {
				resolve();
			})
			.catch((error: any) => {
				reject(error);
			});
		});
	}

	storeMasterPassword(pwd): Promise<any> {
		let { salt, encrypted } = Encrypter.hash(pwd);

		return new Promise((resolve: Function, reject: Function) => {
			Promise.all([
				this.storage.store("master__salt", salt),
				this.storage.store("master__pwd", encrypted)
			]).then(() => {
				resolve();
			})
			.catch((error: any) => {
				reject(error);
			});
		});
	}
	
	requestAccess(): Promise<Boolean> {
		return new Promise((resolve: Function, reject: Function) => {
			this.storage.retrieve("master__pwd").then((pwd: String) => {
				resolve(pwd == null);
			}).catch((error: any) => {
				reject(new Error(error));
			});
		});
	}

	viewPassword(name, userPwd?): Promise<String> {
		return new Promise((resolve: Function, reject: Function) => {
			if (userPwd) {
				this.matches("master", userPwd).then(() => {
					Promise.all([
						this.storage.retrieve(`${name}__salt`),
						this.storage.retrieve(`${name}__pwd`)
					]).then((values: String[]) => {
						let [salt, pwd] = values;
						
						let decrypted = Encrypter.decrypt(pwd, salt);
					
						resolve(decrypted);
					}).catch((error: any) => {
						reject(error);
					});
				})
				.catch((error: any) => {
					reject(new Error(error));
				});
			} else {
				Promise.all([
					this.storage.retrieve(`${name}__salt`),
					this.storage.retrieve(`${name}__pwd`)
				]).then((values: String[]) => {
					let [salt, pwd] = values;
					
					let decrypted = Encrypter.decrypt(pwd, salt);
				
					resolve(decrypted);
				}).catch((error: any) => {
					reject(error);
				});
			}
		});
	}
	
	getAllPasswords(): Promise<any> {
		return new Promise((resolve: Function, reject: Function) => {
			let passwords = [];
			let pwdNames = [];
			
			this.storage.forEach((value: any, key: any) => {
				let [name, sufix] = key.split("__");
				
				if (sufix === "info" && pwdNames.indexOf(name) === -1) {
					let { requestAccess } = value;
					
					passwords.push({
						name, requestAccess
					});
					pwdNames.push(name);
				}
			}).then(() => {
				resolve(passwords);
			}).catch((error: any) => {
				reject(new Error(error));
			});
		});
	}

	
	/**
	 * Checks if an stored password matches a given value
	 */
	matches(name: String, value: String): Promise<Boolean> {
		return new Promise((resolve: Function, reject: Function) => {
			Promise.all([
				this.storage.retrieve(`${name}__salt`),
				this.storage.retrieve(`${name}__pwd`)
			]).then((values: String[]) => {
				let [salt, storedPwd] = values;
				let matches = Encrypter.matches(value, salt, storedPwd);
				
				if (matches) {
					resolve(true);
				} else {
					reject(new Error("Passwords doesn't match"));
				}
			})
			.catch((error: any) => {
				reject(new Error(error));
			});
		});		
	}
	
	clearAll() {
		return this.storage.clear();
	}
}