import { Component, OnInit, Type } from '@angular/core';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  nombre: string = "";
  imagen: string = "";
  imagenLado:string = "";
  nombrePokemon:string = "";
  numeroPokemon:string = "";

  statsPokemon:string = "";



  constructor(private conexionService: ConexionService) { }

  ngOnInit(): void {
  }

  buscar() {
    this.conexionService.getInfoPokemon(this.nombre).subscribe((data: any) => {
      this.nombrePokemon = data.name
      this.imagen = data.sprites.front_default
      this.imagenLado = data.sprites.back_default
      this.numeroPokemon = data.order
      this.statsPokemon = data.base_experience
    })
  }
}
