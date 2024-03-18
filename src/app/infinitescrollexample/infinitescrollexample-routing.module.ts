import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfinitescrollexamplePage } from './infinitescrollexample.page';

const routes: Routes = [
  {
    path: '',
    component: InfinitescrollexamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfinitescrollexamplePageRoutingModule {}
