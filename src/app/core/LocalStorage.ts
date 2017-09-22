import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';

@Injectable()
export default class LocalStorage extends Storage {
	//private _storage: Storage;
	
	constructor(/*private storage: Storage*/) {
		//this._storage = storage;
		super(null);
	}
		
	store(name, value) {
		return super.set(name, value);
	}

	retrieve(name) {
		return super.get(name);
	}
}