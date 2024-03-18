import { Component, OnInit } from '@angular/core';
import { RedireccionamientoService } from '../services/redireccionamiento.service';

@Component({
  selector: 'app-covertidor',
  templateUrl: './covertidor.page.html',
  styleUrls: ['./covertidor.page.scss'],
})
export class CovertidorPage implements OnInit {
  constructor(private red:RedireccionamientoService) { }

  ngOnInit() {
  }
  redireccion(dir:string){
    this.red.navegar(dir);
  }
  amount: number = 0;
  fromCurrency: string = 'MXN';
  toCurrency: string = 'USD';
  convertedAmount: number = 0;

  convert() {
    const exchangeRates: { [key: string]: { [key: string]: number } } = {
      MXN: { USD: 0.050, JPY: 5.37, EUR: 0.044, CNY: 0.32 },
      USD: { MXN: 19.94, JPY: 107.32, EUR: 0.88, CNY: 6.44 },
      JPY: { MXN: 0.19, USD: 0.0093, EUR: 0.0082, CNY: 0.073 },
      EUR: { MXN: 22.68, USD: 1.14, JPY: 122.17, CNY: 7.29 },
      CNY: { MXN: 3.10, USD: 0.16, JPY: 13.69, EUR: 0.14 }
    };

    const rate: number = exchangeRates[this.fromCurrency][this.toCurrency];
    this.convertedAmount = this.amount * rate;
  }
}
