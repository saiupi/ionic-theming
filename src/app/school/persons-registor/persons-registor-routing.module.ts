import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonsRegistorPage } from './persons-registor.page';

const routes: Routes = [
  {
    path: '',
    component: PersonsRegistorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonsRegistorPageRoutingModule {}
