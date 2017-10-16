import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class SpotifyService {

  private searchURL: string;
  private authURL: string;

  constructor(private _http: Http) {
  }

  searchMusic(str: string, type = 'artist') {
    this.searchURL = 'https://api.spotify.com/v1/search?q=foo&type=artist';
    return this._http.get(this.searchURL, {headers: new Headers({
      // 'ZZZ': 'fee',
      // 'Zac-Meister': 'Nbnb mnb mnb'
    })}).map(res => res.json())
  }

  authorize() {
    // const headers = new Headers({
    //   'Foo': 'fee',
    //   'Access-Control-Allow-Origin': '*'
    // });
    // headers.set("Access-Control-Allow-Origin", "*");
    // headers.set("Access-Control-Allow-Methods", "GET");
    // headers.set("Foo", "yo yo yo");

    // Implicit Grant Flow
    // Implicit grant flow is for clients that are implemented entirely using JavaScript and running in the resource owner’s browser.
    //   You do not need any server-side code to use it. Rate limits for requests are improved but there is no refresh token provided.
    //   This flow is described in RFC-6749.
    let client_id = 'e8629f625be5446a8434f03c0063ac27';
    let response_type = 'token';
    let redirect_uri = 'http://localhost:4200/callback';
    this.authURL = 'https://accounts.spotify.com/authorize?client_id=' + client_id+ '&response_type=' + response_type + '&redirect_uri=' + redirect_uri;
    return this._http.get(this.authURL, {headers: new Headers({
      // 'Foo': 'fee',
      // 'Russ-Meister': 'Nbnb mnb mnb'
    })}).map(res => res.json())
  }
}
