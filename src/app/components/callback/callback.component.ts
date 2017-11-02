import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from "@angular/common";

@Component({
  selector: 'callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class CallbackComponent implements OnInit {

  public accessToken: string;
  public tokenType: string;
  public expiresIn: string;
  public queryStringArray: Array<string>;

  constructor(private location: Location) {
    let queryString = this.location.path(true).substring(10);
    this.queryStringArray = queryString.split('&');
  }

  getQueryVariable(variable) {
    for (var i = 0; i < this.queryStringArray.length; i++) {
      var pair = this.queryStringArray[i].split('=');
      if (decodeURIComponent(pair[0]) == variable) {
        return decodeURIComponent(pair[1]);
      }
    }
    console.log('Query variable %s not found', variable);
  }

  ngOnInit() {
    // feedback
    this.accessToken = this.getQueryVariable('access_token');
    this.tokenType = this.getQueryVariable('token_type');
    this.expiresIn = this.getQueryVariable('expires_in');
    // set token
    localStorage.setItem('bearerToken', this.accessToken);
    console.log('Updated local storage token');

  }

}
