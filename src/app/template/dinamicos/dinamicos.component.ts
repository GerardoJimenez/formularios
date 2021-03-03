import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

  interface Persona {
    nombre: string;
    favoritos: Favorito[];
  }

  interface Favorito {
    id: number;
    nombre: string;
  }

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  
  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Gerardo',
    favoritos: [
      { id: 1, nombre: 'Lef 4 dead 2'},
      { id: 2, nombre: 'League of legends'},
      { id: 3, nombre: 'Crash Team Racing'},
    ]
  }
  
  @ViewChild('miFormulario') miFormulario!: NgForm;
  constructor() { }
  nombreValido():boolean {
    return this.miFormulario?.controls.nombre?.invalid 
      && this.miFormulario?.controls.nombre?.touched;
  }
  ngOnInit(): void {
  }

  agregarJuego(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({...nuevoFavorito});
  }

  guardar(){
    console.log('formulario exitoso');
  }

  eliminar(index: number){
    console.log('eliminar');
    this.persona.favoritos.splice(index, 1);

  }
}

