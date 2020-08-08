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
    this.menuCtrl.enable(true); // or true 
   }

  ngOnInit() {
  }
  slideOpts = {
    autoplay: {
    delay: 1500
    }
  };
  submit(){
    this.router.navigate(['/login']);

  }

}
