import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CovertidorPage } from './covertidor.page';

const routes: Routes = [
  {
    path: '',
    component: CovertidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CovertidorPageRoutingModule {}
