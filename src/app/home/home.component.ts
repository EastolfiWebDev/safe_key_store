import { Component, OnInit } from '@angular/core';

//import LocalStorage from "../core/LocalStorage";
import EncrypterHelper from "../core/EncrypterHelper";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	message = "Yay";
	helper: EncrypterHelper;
	canViewPasswords: Boolean = false;
	creating: Boolean = false;
	newPassword: any;
	passwords: any[];

	constructor(private _helper: EncrypterHelper) {
		this.helper = _helper;
		
		this.initNewPassword();
	}

	ngOnInit() {}
	
	getAllPasswords() {
		this.helper.getAllPasswords().then((pwds: any[]) => {
			this.passwords = pwds;
		}).catch(this.handleError);
	}
	
	access() {
		this.helper.requestAccess().then((firstTime: Boolean) => {
			this.setupMasterPassword(firstTime)
			.then((result: any) => {
				let { error, pwd } = result;
				
				if (error) {
					this.canViewPasswords = false;
					
					this.handleError(error);
				} else {
					this.canViewPasswords = true;
					
					this.getAllPasswords();
				}					
			})
			.catch(this.handleError);
		}).catch(this.handleError);
	}
	
	viewPassword(password: any) {
		if (password.requestAccess) {
			this.helper.requestAccess()
			.then((firstTime: Boolean) => {
				this.setupMasterPassword(firstTime)
				.then((result: any) => {
					let { error, pwd } = result;
					
					if (error) {
						this.handleError(error);
					} else {
						this.helper.viewPassword(password.name, pwd)
						.then((password: String) => {
							alert(`Your password is: ${password}`);
						}).catch(this.handleError);
					}
				})
				.catch(this.handleError);
			})
			.catch(this.handleError);
		} else {
			this.helper.viewPassword(password.name)
			.then((password: String) => {
				alert(`Your password is: ${password}`);
			}).catch(this.handleError);
		}
	}
	
	setupMasterPassword(firstTime: Boolean): Promise<any> {
		return new Promise((resolve: Function, reject: Function) => {
			if (firstTime) {
				let pwd1 = prompt("Set up your master password");
				
				if (pwd1) {
					let pwd2 = prompt("Type again your master password");
					
					if (pwd1 === pwd2) {
						this.helper.storeMasterPassword(pwd1);
						
						resolve({ error: null, pwd: pwd1});
					} else {
						//reject(new Error("Passwords doesn't match"));
						resolve({ error: new Error("Passwords doesn't match") });
					}
				}
			} else {
				let pwd = prompt("Introduce your master password");
				
				if (pwd) {
					this.helper.matches("master", pwd).then(() => {
						resolve({ error: null, pwd });
					}).catch((error: Error) => {
						reject(error);
					});
				}
			}
		});
		
	}
	
	addPassword() {
		this.creating = true;
	}
	
	savePassword() {
		if (this.isValidNewPassword()) {
			this.helper.storePassword(this.newPassword)
			.then(() => {
				alert(`Password "${this.newPassword.name}" created`);
				
				this.resetNewPassword();
				this.getAllPasswords();
			}).catch(this.handleError);
		} else {
			this.handleError(new Error("Yous must fill all the fields"));
		}
	}
	
	resetNewPassword() {
		this.creating = false;
		
		this.initNewPassword();
	}
	
	initNewPassword() {
		this.newPassword = {
			name: "", password: "", requireAccess: true, visible: false
		}
	}
	
	isValidNewPassword() {
		if (!this.newPassword.name) return false;
		if (!this.newPassword.password) return false;
		
		return true;
	}
	
	clearAll() {
		this.helper.clearAll().then(() => {
			alert("All passwords deleted");
			
			this.exit();
		}).catch(this.handleError);
	}
	
	exit() {
		this.resetNewPassword();
		
		this.canViewPasswords = false;
	}
	
	handleError(error: Error) {
		alert(error.message);
	}
}