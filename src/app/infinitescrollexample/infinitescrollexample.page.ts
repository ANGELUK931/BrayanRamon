import { Component, OnInit } from '@angular/core';
import { InfinitescrollserviceService } from '../services/infinitescrollservice.service';
@Component({
  selector: 'app-infinitescrollexample',
  templateUrl: './infinitescrollexample.page.html',
  styleUrls: ['./infinitescrollexample.page.scss'],
})
export class InfinitescrollexamplePage implements OnInit {
  items:any[]=[];

  nombre:string='';
  categoria:string='';
  proovedor:string='';
  precio:string='';
  cantidad:string='';
  idStock:string='';

  constructor(private infiniteScrollData: InfinitescrollserviceService) { }

  ngOnInit() {
    this.generateItems();
    //this.obtenerDatos();
  }
  generateItems(){
    const contador = this.items.length + 1;
    for(let i = 0; i < 50 ; i++){
      this.items.push({hora:"" + Math.floor(Math.random()*23) + ":" + Math.floor(Math.random()*59)});
    }
  }
  onIonInfinite(event:any){
    this.generateItems();
  }

  async obtenerDatos(){
    this.items = await this.infiniteScrollData.request_Data();
  }

  limpiarFormulario(){
    this.nombre = '';
    this.categoria = '';
    this.proovedor = '';
    this.precio = '';
    this.cantidad = '';
    this.idStock = '';
  }
  async guardar(){
    const datos = {
      nombre:this.nombre,
      categoria:this.categoria,
      proovedor:this.proovedor,
      precio:this.precio,
      cantidad:this.cantidad,
      idStock:this.idStock
    };
    const respuesta = this.infiniteScrollData.upload_Data(datos,this.idStock);
    if(respuesta){
      this.limpiarFormulario();
      console.log('correcto')
      //this.updateListElements();
    }else{
      
    }
  }
}
