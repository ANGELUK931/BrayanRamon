import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressbarUsersPageRoutingModule } from './progressbar-users-routing.module';

import { ProgressbarUsersPage } from './progressbar-users.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressbarUsersPageRoutingModule
  ],
  declarations: [ProgressbarUsersPage]
})
export class ProgressbarUsersPageModule {}
