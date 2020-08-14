import { Component, OnInit } from '@angular/core';
import { ViewListModalPage } from 'src/app/modalWindow/view-list-modal/view-list-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-childrens-list',
  templateUrl: './childrens-list.page.html',
  styleUrls: ['./childrens-list.page.scss'],
})
export class ChildrensListPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  async viewModal() {
    const modal = await this.modalController.create({
      component: ViewListModalPage,
      cssClass: 'my-custom-modal-css'
    });
    return await modal.present();
  }
}
