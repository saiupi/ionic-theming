import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,private menuCtrl: MenuController) { }

  ngOnInit() {
    // this.menuCtrl.enable(false); // or true 
    console.log(environment.production);
    
    // console.log(environment.message);
    // console.log(SERVER_URL); 
   }
  submit(){
    this.router.navigate(['/singup']);

  }
  goToDashBoard(){
    this.router.navigate(['/dashboard']);


  }

}
