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
    this.authURL = 'https://accounts.spotify.com/authorize?client_id=e8629f625be5446a8434f03c0063ac27&response_type=code&redirect_uri=http://localhost:4200/callback';
    return this._http.get(this.authURL, {headers: new Headers({
      // 'Foo': 'fee',
      // 'Russ-Meister': 'Nbnb mnb mnb'
    })}).map(res => res.json())
  }
}
