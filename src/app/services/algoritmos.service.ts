import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlgoritmosService {

  constructor() { }
  
  esPrimo(n:number):number{
    for(let i = 2; i <= Math.sqrt(n); i++){
      if(n % i == 0 || n <= 1)
      return 0;
    }
    return 1;
  }
  
  fibonacci(n:number):number[]{
    let fibo = [0,1];
    for(let i = 2; i <= n; i++){
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
  }
  primos(n:number, divisor:number):boolean{
    if(n < 2){
      return false;
    }
    if(n % divisor == 0){
      return false;
    }
    if(divisor * divisor > n){
      return true;
    }
    return this.primos(n, divisor+1);
  }
}
