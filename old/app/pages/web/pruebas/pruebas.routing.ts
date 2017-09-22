import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Componente local
import { PruebasComponent } from "./pruebas.component";

const routes: Routes = [
	{ path: "pruebas", component: PruebasComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class PruebasRouting {

}