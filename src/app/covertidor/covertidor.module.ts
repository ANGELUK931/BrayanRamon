import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CovertidorPageRoutingModule } from './covertidor-routing.module';

import { CovertidorPage } from './covertidor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CovertidorPageRoutingModule
  ],
  declarations: [CovertidorPage]
})
export class CovertidorPageModule {}
