import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private menuCtrl:MenuController,private router: Router) {
   }

  ngOnInit() {
    this.menuCtrl.enable(true); // or true 

  }
  
  slideOpts = {
    autoplay: {
    delay: 1500
    }
  };
  public appPages = [
    {
      title: 'childrens',
      url: 'childrens',
      icon: 'mail'
    },
    {
      title: 'Outbox',
      url: 'singup',
      icon: 'paper-plane'
    },
  ]
  login(){
    this.router.navigate(['/login']);

  }
  upload(){
    this.router.navigate(['/photo-upload']);
 
  }
  registor(){
    this.router.navigate(['/persons-registor']);
 
  }
  

}
