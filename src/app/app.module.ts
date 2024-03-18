import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import  firebase  from "firebase/app"
const firebaseConfig = {
  apiKey: "AIzaSyBnQjTnPZwgSSWs7IC_P3MqYX0NGxaY3zY",
  authDomain: "brayanramon-6beb9.firebaseapp.com",
  databaseURL: "https://brayanramon-6beb9-default-rtdb.firebaseio.com",
  projectId: "brayanramon-6beb9",
  storageBucket: "brayanramon-6beb9.appspot.com",
  messagingSenderId: "394898687008",
  appId: "1:394898687008:web:dfa146a6cdd326c511e845"
};
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

