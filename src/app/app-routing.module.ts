import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AsesoriaComponent } from './pages/asesoria/asesoria.component';
import { EncomiendaComponent } from './pages/encomienda/encomienda.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { ToursComponent } from './pages/tours/tours.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { VuelosComponent } from './pages/vuelos/vuelos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AplicacionMovilComponent } from './pages/aplicacion-movil/aplicacion-movil.component';


const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item/:id', component: ItemComponent },
    { path: 'search/:termino', component: SearchComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'asesoria', component: AsesoriaComponent },
    { path: 'encomienda', component: EncomiendaComponent },
    { path: 'paquetes', component: PaquetesComponent },
    { path: 'tours', component: ToursComponent },
    { path: 'vehiculos', component: VehiculosComponent },
    { path: 'vuelos', component: VuelosComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'aplicacionMovil', component: AplicacionMovilComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];


@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }






