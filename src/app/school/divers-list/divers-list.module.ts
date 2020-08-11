import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiversListPageRoutingModule } from './divers-list-routing.module';

import { DiversListPage } from './divers-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiversListPageRoutingModule
  ],
  declarations: [DiversListPage]
})
export class DiversListPageModule {}
