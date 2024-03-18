import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import'firebase';

@Injectable({
  providedIn: 'root'
})

export class InfinitescrollserviceService {
  data:any[]=[]

  constructor() { }

  request_Data(){
    try{
      const ref = firebase.database().ref('/data/mensajes');
      ref.once('value').then((snapShot)=>{
        snapShot.forEach((childSnapshot)=>{
          const key = childSnapshot.key;
          const datos = childSnapshot.val();
          this.data.push({
            key:key, 
            datos:datos
          });
        });
      });
      return this.data;
    }catch(e){
      return [];
    }
    
  }

  upload_Data(data:{}, key:any){
    if(!data && !key){
      return false;
    }
    try{
      const dataRef = firebase.database().ref('/data/mensajes');
      dataRef.child(key).set(data);
      return true;
    }catch(e){
      console.log('Error' + e);
      return false;
    }
  }
}
