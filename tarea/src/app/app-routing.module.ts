import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './paginas/personajes/personajes.component';
import { InformacionComponent } from './paginas/informacion/informacion.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { HechizosComponent } from './paginas/hechizos/hechizos.component';
import { LibrosComponent } from './paginas/libros/libros.component';

const routes: Routes = [
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'personajes',
    component:PersonajesComponent
  },
  {
    path:'informacion',
    component:InformacionComponent
  },
  {
    path:'hechizos',
    component:HechizosComponent
  },
  {
    path:'libros',
    component:LibrosComponent
  },
  {
    path:'**',
    redirectTo:'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
