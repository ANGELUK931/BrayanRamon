import { Component, OnInit } from '@angular/core';
import { RedireccionamientoService } from '../services/redireccionamiento.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {
  displayValue: string ='';

  constructor(private red:RedireccionamientoService) { }
  redireccion(dir:string){
    this.red.navegar(dir);
  }

  ngOnInit() {
  }
  appendToDisplay(value: string) {
    this.displayValue += value;
  }

  clearDisplay() {
    this.displayValue = '';
  }

  calculate() {
    try {
      const result = eval(this.displayValue);
      this.displayValue = result.toString();
    } catch (error) {
      this.displayValue = 'Error';
    }
  }
}


