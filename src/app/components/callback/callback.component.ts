import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {ParamMap} from "@angular/router";

@Component({
  selector: 'callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  public accessToken: Observable<string>;
  public tokenType: Observable<string>;
  public error: string;
  public state: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route
      .queryParamMap
      .map(params => params.get('access_token') || 'None')
      .subscribe(foo => this.accessToken);

    const id = this.route.snapshot.paramMap.get('token_type');
    console.log(id);
    const id2 = this.route.snapshot.params['token_type'];
    console.log(id2);
  }

}
