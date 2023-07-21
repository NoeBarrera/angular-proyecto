import { Component, OnInit} from '@angular/core';
import { ServicioInicioService } from 'src/app/servicios/servicio-inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  datos:any;
  constructor (private servicio:ServicioInicioService){}
  ngOnInit(): void {

    this.datos = this.servicio.getCharacters();

  }

}
