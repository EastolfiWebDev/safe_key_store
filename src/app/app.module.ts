import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from "ionic-angular";
import { NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';

import LocalStorage from './core/LocalStorage';
import EncrypterHelper from './core/EncrypterHelper';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

console.log(AppComponent);
console.log(HomeComponent);

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent
	],
	entryComponents: [
		HomeComponent
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(AppComponent),
		IonicStorageModule.forRoot({
			name: '__app_ddbb__',
			driverOrder: ['indexeddb', 'sqlite', 'websql']
		})
	],
	providers: [
		LocalStorage, EncrypterHelper
	],
	bootstrap: [
		// AppComponent
		IonicApp
	]
})
export class AppModule { }
