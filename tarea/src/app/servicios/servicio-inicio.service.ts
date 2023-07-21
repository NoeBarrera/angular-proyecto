import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioInicioService {

  constructor(private http: HttpClient) { }
  getCharacters(){
    return this.http.get('https://hp-api.onrender.com/api/characters'); // Listener
  }

}
