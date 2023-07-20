import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  rutas = [
    {
      nombre: 'Inicio',
      url:'/inicio'
    },
    {
      nombre: 'Personajes',
      url:'/personajes'
    },
    {
      nombre: 'Informacion',
      url:'/informacion'
    },
    {
      nombre: 'Hechizos',
      url:'/hechizos'
    },
    {
      nombre:'Libros',
      url:'/libros'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
