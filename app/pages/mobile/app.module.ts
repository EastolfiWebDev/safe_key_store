import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { AppRoutingModule } from "./app.routing";
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        NativeScriptModule, FormsModule, HttpModule/*,
         AppRoutingModule*/
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
