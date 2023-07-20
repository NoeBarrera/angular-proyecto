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
    loadChildren: () => import('./paginas/personajes/personajes.module').then(m => m.PersonajesModule)
  },
  {
    path:'informacion',
    loadChildren: () => import('./paginas/informacion/informacion.module').then(m => m.InformacionModule)
  },
  {
    path:'hechizos',
    loadChildren: () => import('./paginas/hechizos/hechizos.module').then(m => m.HechizosModule)
  },
  {
    path:'libros',
    loadChildren: () => import('./paginas/libros/libros.module').then(m => m.LibrosModule)
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