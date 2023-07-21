import { Component, OnInit } from '@angular/core';
import { ServicioInicioService } from 'src/app/servicios/servicio-inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  datos: any;
  constructor(private servicio: ServicioInicioService) { }

  ngOnInit(): void {
    this.datos = this.servicio.getCharacters();
  }

  mostrarPersonajes(id: string): void {
    var personajes = document.getElementById(id);
    if (personajes) {
      var casa = document.querySelector(`img[src$='${id}.png']`);
      var modal = document.createElement('div');
      modal.className = 'modal';
      var modalContent = document.createElement('div');
      modalContent.className = 'modal-content';
      modalContent.innerHTML = personajes.innerHTML;
      modal.appendChild(modalContent);
      document.body.appendChild(modal);

      modal.style.display = 'block';

      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = 'none';
          document.body.removeChild(modal);
        }
      }
    }
  }

}

