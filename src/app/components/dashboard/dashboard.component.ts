import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  searchStr:string;

  keyPressed() {
    console.log(this.searchStr);
  }

  constructor() { }

  ngOnInit() {
  }

}
