import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinitescrollexamplePageRoutingModule } from './infinitescrollexample-routing.module';

import { InfinitescrollexamplePage } from './infinitescrollexample.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinitescrollexamplePageRoutingModule
  ],
  declarations: [InfinitescrollexamplePage]
})
export class InfinitescrollexamplePageModule {}
