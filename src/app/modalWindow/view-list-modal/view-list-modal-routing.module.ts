import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewListModalPage } from './view-list-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ViewListModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewListModalPageRoutingModule {}
