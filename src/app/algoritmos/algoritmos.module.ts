import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlgoritmosPageRoutingModule } from './algoritmos-routing.module';
import { AlgoritmosPage } from './algoritmos.page';
import { PlotlyModule } from 'angular-plotly.js';

@NgModule({
  imports: [
    PlotlyModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AlgoritmosPageRoutingModule
  ],
  declarations: [AlgoritmosPage]
})
export class AlgoritmosPageModule {}
