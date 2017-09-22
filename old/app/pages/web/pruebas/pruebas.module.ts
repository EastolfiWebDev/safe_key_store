import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { AngularFireModule } from "angularfire2";
// import { AngularFireDatabaseModule } from "angularfire2/database";
// import { AngularFireAuthModule } from 'angularfire2/auth';

// Componentes locales
import { PruebasComponent } from './pruebas.component';
import { PruebasRouting }	from "./pruebas.routing";

@NgModule({
    declarations: [
        PruebasComponent
    ],
    imports: [
        // Modulos de Angular
        BrowserModule, FormsModule, HttpModule/*,
        // Modulo de aplicacion de Firebase
	    AngularFireModule.initializeApp(Config.firebase.appConf, Config.firebase.appName),
        // Modulos de DB y Auth de Firebase
        AngularFireDatabaseModule, AngularFireAuthModule*/,
        // Modulos locales
        PruebasRouting
    ],
    providers: []
})
export class PruebasModule { }
