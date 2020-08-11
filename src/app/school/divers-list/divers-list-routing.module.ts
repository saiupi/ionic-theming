import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiversListPage } from './divers-list.page';

const routes: Routes = [
  {
    path: '',
    component: DiversListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiversListPageRoutingModule {}
