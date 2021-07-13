import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConexionService {
  private url: string = "https://pokeapi.co/api/v2/pokemon"
  constructor(private http: HttpClient) {}

  getInfoPokemon(nombre: string){
    return this.http.get(`${this.url }/${nombre}` )
  }

}
