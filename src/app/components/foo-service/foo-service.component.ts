import { Component, OnInit } from '@angular/core';
// import {Injectable} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'foo-service',
  templateUrl: './foo-service.component.html',
  styleUrls: ['./foo-service.component.css']
})

// @Injectable()
export class FooServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getSomething() {
    return 'Should I be doing this on the cruise??';
  }

}
