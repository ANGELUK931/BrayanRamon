import { Component, OnInit } from '@angular/core';
import { NavController,ToastController, LoadingController } from '@ionic/angular';
import { LoginstateComponent } from '../loginstate/loginstate.component';
import { StateloginService } from '../services/statelogin.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {
  passView:boolean = false
  togglePassword:boolean = false;
  user:string = '';
  pass:string ='';

  constructor(private toastController:ToastController,
     private lsc : LoginstateComponent,
     private navController:NavController,
     private LoadingController : LoadingController) { }

  ngOnInit() {
  }
  async presentarLoading(){
    const carga = await this.LoadingController.create({
      message: 'porfavor, espere'
    });
    await carga.present();
  }

  async dismissLoading(){
    await this.LoadingController.dismiss();
  }
  mostrarPassword(){
    this.togglePassword = !this.togglePassword;
  }
  
  mostrarDatos(){
    console.log(this.user);
    console.log(this.pass);
  }
//muestra datos toast
  async mostrarToast(){
    const toast = await this.toastController.create({
      //parametros
      message:this.user + this.pass, 
      duration: 2000, //ms
      position: 'bottom',//donde se ubica
    });
    //mostrar toast
    toast.present();
  }

  async login(){
    const result = await this.lsc.login(this.user, this.pass);
    if(result){

    }else{

    }
  }

}
