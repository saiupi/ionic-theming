import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagementListPage } from './management-list.page';

const routes: Routes = [
  {
    path: '',
    component: ManagementListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementListPageRoutingModule {}
