import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonsRegistorPageRoutingModule } from './persons-registor-routing.module';

import { PersonsRegistorPage } from './persons-registor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonsRegistorPageRoutingModule
  ],
  declarations: [PersonsRegistorPage]
})
export class PersonsRegistorPageModule {}
