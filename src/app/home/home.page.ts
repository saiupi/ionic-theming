import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  issues: any;
  name: any;
  email: any;
  visit: any;
  date: any;
  entry: any;
  exit: any;
  pVisit: any;

  constructor(public http: HttpClient, private router: Router,private route: ActivatedRoute,) { 
    this.route.queryParams.subscribe(params => {
      this.name = params["name"];
      this.email = params["email"];
      this.visit = params["visit"];
      this.pVisit = params["pVisit"];
      this.date = params["date"];
      this.entry = params["entry"];
      this.exit = params["exit"];
    });
  }
  ngOnInit() {
    return this.http.get("https://newsapi.org/v2/everything?q=bitcoin&from=2020-03-25&sortBy=publishedAt&apiKey=1848b5465b1449d78d10c2991b1bea98").subscribe((res) => {
        this.issues = res;
        console.log("viewissuedddd", this.issues);
      });
  }
}
  
