import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlgoritmosPage } from './algoritmos.page';

const routes: Routes = [
  {
    path: '',
    component: AlgoritmosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlgoritmosPageRoutingModule {}
