import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

// Rutas
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { VuelosComponent } from './pages/vuelos/vuelos.component';
import { ToursComponent } from './pages/tours/tours.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { EncomiendaComponent } from './pages/encomienda/encomienda.component';
import { AsesoriaComponent } from './pages/asesoria/asesoria.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AplicacionMovilComponent } from './pages/aplicacion-movil/aplicacion-movil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent,
    ContactoComponent,
    VuelosComponent,
    ToursComponent,
    PaquetesComponent,
    EncomiendaComponent,
    AsesoriaComponent,
    VehiculosComponent,
    RegistroComponent,
    AplicacionMovilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
