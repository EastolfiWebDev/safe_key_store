import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Componente local
import { InicioComponent } from "./inicio.component";

const routes: Routes = [
	{ path: "inicio", component: InicioComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class InicioRouting {

}