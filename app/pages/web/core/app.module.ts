import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from 'angularfire2/auth';

// Configuracion
import { Config } from "shared/config/config";

import { InicioModule } from "../inicio/inicio.module";
import { PruebasModule } from "../pruebas/pruebas.module";

// Componentes locales
import { AppComponent } from './app.component';
import { AppRouting }	from "./app.routing";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        // Modulos de Angular
        BrowserModule, FormsModule, HttpModule,
        // Modulo de aplicacion de Firebase
	    AngularFireModule.initializeApp(Config.firebase.appConf, Config.firebase.appName),
        // Modulos de DB y Auth de Firebase
        AngularFireDatabaseModule, AngularFireAuthModule,
        // Modulos locales
        AppRouting, InicioModule, PruebasModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
