import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-list-modal',
  templateUrl: './view-list-modal.page.html',
  styleUrls: ['./view-list-modal.page.scss'],
})
export class ViewListModalPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }
  close(){
    this.modalCtrl.dismiss({
      'dismissed': true,
      cssClass: 'my-custom-class'
    });
  }

}
