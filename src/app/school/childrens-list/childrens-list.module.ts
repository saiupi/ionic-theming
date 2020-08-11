import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildrensListPageRoutingModule } from './childrens-list-routing.module';

import { ChildrensListPage } from './childrens-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildrensListPageRoutingModule
  ],
  declarations: [ChildrensListPage]
})
export class ChildrensListPageModule {}
