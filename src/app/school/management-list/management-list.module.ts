import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagementListPageRoutingModule } from './management-list-routing.module';

import { ManagementListPage } from './management-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagementListPageRoutingModule
  ],
  declarations: [ManagementListPage]
})
export class ManagementListPageModule {}
