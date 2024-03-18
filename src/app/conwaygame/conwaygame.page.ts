import { Component, OnInit } from '@angular/core';
import { RedireccionamientoService } from '../services/redireccionamiento.service';

@Component({
  selector: 'app-conwaygame',
  templateUrl: './conwaygame.page.html',
  styleUrls: ['./conwaygame.page.scss'],
})
export class ConwaygamePage implements OnInit {
  siguienteTablero:any[][]=[];
  tablero:any[][] = [];
  alto:number = 100;
  ancho:number = 100;
  constructor(private red:RedireccionamientoService) { }
  redireccion(dir:string){
    this.red.navegar(dir);
  }

  ngOnInit() {
    this.poblar();
    this.iteracion();
  }
  poblar(){
    for(let i=0; i<this.alto; i++){
      this.tablero[i]=[];
      for(let j=0; j<this.ancho; j++){
        this.tablero[i][j]=Math.floor(Math.random()*2);
      }
    }
    console.table(this.tablero)
  }
  contarVecinos(){
    this.siguienteTablero = this.copiarTablero(this.tablero);
    for(let i = 0; i < this.alto; i++){
      for(let j = 0; j < this.ancho; j++){
        let vecinos = this.contador(i , j);
        if(this.tablero[i][j] == 0 && vecinos == 3){
          this.siguienteTablero[i][j] = 1;
        }else if(this.tablero[i][j] == 1 && (vecinos < 2 || vecinos > 3)){
          this.siguienteTablero[i][j] = 0;
        }
      }
    }
  }
  copiarTablero(ArregloOriginal:number[][]):number[][]{
    let copia:number [][] = [];
    for(let i = 0; i < this.alto; i++){
      copia[i]=[];
      for(let j = 0; j < this.ancho; j++){
        copia[i][j] = ArregloOriginal[i][j];
      }
    }
    return copia;
  }
  contador(a:number, b:number){
    let vecinos = 0;
    for(let i = -1; i < 2; i++){
      for(let j = -1; j < 2; j++){
        let x = (a + i + this.alto)%this.alto;
        let y = (b + j + this.ancho)%this.ancho;
        vecinos+=(this.tablero[x][y]);
      }
    }
    vecinos-=this.tablero[a][b];
    return vecinos;
  }
  actualizarEstado(){
    this.tablero = this.copiarTablero(this.siguienteTablero);
  }
  iteracion(){
    setInterval(()=>{
      this.contarVecinos();
      this.actualizarEstado();
    },150);
    console.table(this.tablero);
  }

  

}
