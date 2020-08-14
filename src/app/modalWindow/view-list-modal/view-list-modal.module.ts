import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewListModalPageRoutingModule } from './view-list-modal-routing.module';

import { ViewListModalPage } from './view-list-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewListModalPageRoutingModule
  ],
  declarations: [ViewListModalPage]
})
export class ViewListModalPageModule {}
