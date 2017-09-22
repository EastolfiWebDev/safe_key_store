//import LocalStorage from "./LocalStorage";
//const CryptoJS = require("crypto-js");
import * as CryptoJS from "crypto-js";

export default class Encrypter {
	static encrypt(pwd: String, salt?: String): any {
		if (!salt) salt = CryptoJS.lib.WordArray.random(128/8).toString();
		
		let encrypted = CryptoJS.AES.encrypt(pwd, salt).toString();

		return { salt, encrypted };
	}
	
	static decrypt(pwd: String, salt: String): String {
		let decrypted = CryptoJS.AES.decrypt(pwd, salt);
    
		return decrypted.toString(CryptoJS.enc.Utf8);
	}
	
	static hash(pwd: String, salt?: String): any {
		if (!salt) salt = CryptoJS.lib.WordArray.random(128/8).toString();
		
		let pwdHash = CryptoJS.PBKDF2(
			CryptoJS.SHA3(pwd).toString(),
			salt, {
				keySize: 512/32,
				iterations: 1000
			}
		).toString();

		return { salt, encrypted: pwdHash };
	}

	
	/**
	 * Checks if an stored password matches a given value
	 */
	static matches(value: String, salt: String, stored: String): Boolean {
		if (Encrypter.hash(value, salt).encrypted === stored) {
			return true;
		}

		return false;
	}
}