import { Component, Injectable, OnInit } from '@angular/core';
 import firebase from 'firebase';
@Component({
  selector: 'app-loginstate',
  templateUrl: './loginstate.component.html',
  styleUrls: ['./loginstate.component.scss'],
})

@Injectable({
  providedIn: 'root'
})
export class LoginstateComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  async authfirebase(user:string, pass:string){
    try{
      const resultado = await firebase.auth().signInWithEmailAndPassword(user, pass);
      if(resultado.user && resultado.user.emailVerified){
         
      }
    }catch(e){

    }
  }
  login(u:string, p:string){
    if (u !==''|| p !==''){
      console.log('hay un campo vacio');
      return;
    }
    //logica inicio de sesion
    localStorage.setItem('nombreuser',u);
    localStorage.setItem('level','1');
    return true;
  }
}
