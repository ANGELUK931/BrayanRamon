import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';

interface Datos {
  pregunta:string;
  respuesta:string;
};

@Component({
  selector: 'app-admin-formulario',
  templateUrl: './admin-formulario.page.html',
  styleUrls: ['./admin-formulario.page.scss'],
})
export class AdminFormularioPage implements OnInit {
  pregunta:Datos[]=[];
  nPreguntas:number[]=[1];
  constructor() { }

  ngOnInit() {
  }
  agregar(){
    const nuevo = this.nPreguntas.length + 1;
    this.nPreguntas.push(nuevo);
  }
  eliminar(dato:number){
    this.nPreguntas = this.nPreguntas.filter(numero => numero !== dato);
  }    
}
