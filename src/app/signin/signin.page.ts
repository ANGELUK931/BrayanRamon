import { Component, OnInit } from '@angular/core';
import { SigninService } from '../services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  //campos de texto
  user:string = '';
  mail:string = '';
  pass1:string = '';
  pass2:string = '';

  //Visibilidad de passwords
  password1:boolean = true;
  password:boolean = true;
  mensaje:string = '';
  constructor(private signIn: SigninService) { }

  ngOnInit() {
  }

  async signinAuth(){
    
    if(!this.signIn.userChecker(this.user)){
      //mandar mensaje
      return;
    }
    if(!this.signIn.passChecker(this.pass1, this.pass2)){
      //mandar mensaje al usuario passWords
      return;
    }
    if(!this.signIn.mailCheck(this.mail)){
      //mandar mensaje al usuario de mail invalido
      return;
    }
    if(!this.signIn.registrosAuth(this.pass1, this.user, this.mail)){ 
    }
    
    this.limpiarformulario();
    
  }

  togglePass(t:string){}

  limpiarformulario(){
    this.user = '';
    this.mail = '';
    this.pass1 = '';
    this.pass2 = '';
  }
}
