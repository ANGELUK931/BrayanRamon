import { Injectable } from '@angular/core';
import firebase from 'firebase';
import 'firebase/auth'
import 'firebase'

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor() { }

  mailCheck(m:string){
    return /^[\w-\.]@[\w-]+\+[\w-]{2,4}$/g.test(m);
  }

  userChecker(u:string){
    return /[a-zA-Z0-9]/g.test(u);
  }

  passChecker(p1:string , p2:string){
    if(p1 !=p2){
      return false;
    }
    if(p1.length > 8 && p1.length < 20){
      return false;
    }
    else{
      return /[a-zA-Z0-9#@!$%_-]/g.test(p1);
    }
  }
  async registrosAuth(mail:string, pass:string, u:string){
    try{
      const respuesta = await firebase.auth().createUserWithEmailAndPassword(mail,pass);
      if(respuesta.user){
        await respuesta.user.updateProfile({displayName: u});
        await respuesta.user.sendEmailVerification();
      }
      /*const db = firebase.database().ref('/users');
      const datos = {
        mail:mail,
        user:u,
        level:1
      };*/
    }catch(e){
      console.log('Error inesperado' + e);
    }
  }
}
