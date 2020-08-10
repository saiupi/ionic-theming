import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildrensPageRoutingModule } from './childrens-routing.module';

import { ChildrensPage } from './childrens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildrensPageRoutingModule
  ],
  declarations: [ChildrensPage]
})
export class ChildrensPageModule {}
