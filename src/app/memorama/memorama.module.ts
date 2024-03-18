import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemoramaPageRoutingModule } from './memorama-routing.module';

import { MemoramaPage } from './memorama.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemoramaPageRoutingModule
  ],
  declarations: [MemoramaPage]
})
export class MemoramaPageModule {}
