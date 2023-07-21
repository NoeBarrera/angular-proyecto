import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PersonajesComponent } from './paginas/personajes/personajes.component';
import { InformacionComponent } from './paginas/informacion/informacion.component';
import { HechizosComponent } from './paginas/hechizos/hechizos.component';
import { LibrosComponent } from './paginas/libros/libros.component';
import { MenuComponent } from './componentes/menu/menu.component';

import { HttpClientModule } from '@angular/common/http'; // Importar http module para consumir una API

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PersonajesComponent,
    InformacionComponent,
    HechizosComponent,
    LibrosComponent,
    MenuComponent
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
