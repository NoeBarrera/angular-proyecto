import { Component, OnInit } from '@angular/core';
import { ServicioPersonajesService } from 'src/app/servicios/servicio-personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit  {
    datos:any;
    constructor (private servicio:ServicioPersonajesService){}
    ngOnInit(): void {

      this.datos = this.servicio.getCharacters();
  
    }
}
