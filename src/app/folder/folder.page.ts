import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  today: string;
  profileForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,private formBuilder: FormBuilder,private router: Router) {
    
   }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    const now = new Date();
   this.today = now.toISOString();

  this.profileForm = this.formBuilder.group({
    name: ['',],
    email: [''],
    visit: [''],
    pVisit: [''],
    date: [''],
    entry: [''],
    exit: ['']
    });

  }
  get f() { return this.profileForm.controls; }
  myDate: String = new Date().toLocaleDateString();
  
  submit(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        name: this.profileForm.controls['name'].value,
        email: this.profileForm.controls['email'].value,
        visit: this.profileForm.controls['visit'].value,
        pVisit: this.profileForm.controls['pVisit'].value,
        date: this.profileForm.controls['date'].value,
        entry: this.profileForm.controls['entry'].value,
        exit: this.profileForm.controls['exit'].value,

      }
    };
    
    this.router.navigate(['/home'],navigationExtras);
  }
  
}
