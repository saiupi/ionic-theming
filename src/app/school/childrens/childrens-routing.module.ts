import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildrensPage } from './childrens.page';

const routes: Routes = [
  {
    path: '',
    component: ChildrensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildrensPageRoutingModule {}
