import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  initForm = {
    producto: 'Cajeta coronado',
    precio: 0,
    existencia: 0
  }
  @ViewChild('miFormulario') miFormulario!: NgForm;
  constructor() { }

  ngOnInit(): void {
  }
  nombreValido():boolean {
    return this.miFormulario?.controls.producto?.invalid 
      && this.miFormulario?.controls.producto?.touched;
  }
  precioValido():boolean {
    return this.miFormulario?.controls.precio?.value < 0 
      && this.miFormulario?.controls.precio?.touched;

  }
  guardar() {
    console.log('Posteo correcto');
    this.miFormulario.resetForm({
      producto: 'Mermelada de fresa',
      precio: 8,
      existencia: 10
    });

  }
}
