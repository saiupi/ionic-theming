import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildrensListPage } from './childrens-list.page';

const routes: Routes = [
  {
    path: '',
    component: ChildrensListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildrensListPageRoutingModule {}
