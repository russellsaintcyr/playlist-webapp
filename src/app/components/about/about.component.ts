import { Component, OnInit } from '@angular/core';
import {FooServiceComponent} from "../foo-service/foo-service.component";

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [FooServiceComponent]
})
export class AboutComponent implements OnInit {

  public message: string;

  constructor(private fooService: FooServiceComponent) {
    this.message = fooService.getSomething();
  }

  ngOnInit() {
  }

}
