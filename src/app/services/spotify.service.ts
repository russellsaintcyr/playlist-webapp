import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class SpotifyService {

  private searchURL: string;
  private authURL: string;
  private userID: string;
  private bearerToken: string;

  constructor(private _http: Http) {
    this.userID = 'x1111x';
    this.bearerToken = 'BQAmM4DT60KF1574kJsZWHp-bx0mStR3w2PAu30-AHyiCtkz75LlM73Gs5f7fZV41DiBe6YQaOhmESSNB4G-m9d9UDgtWCMUDMWZU-LImGxo9W35jzVifnHlF5cbCEbQzGmZOmt2oAVNf-ibZD82pE6WV2xBgCg9EpjExnDBSzXf4EMTXjcmkWTo0cLuoaSp1Q2RWArck26muyRuKKh5vpgxKUI6HABuTj1TLemkN0xRH2Z-V0IAs_1bwDmCRq3_8o9KlmZhwM8S8Fj1Gu7iIw'
  }

  getPlaylist(playlistID: string) {
    // spotify:user:x1111x:playlist:46JHZX9X1hHUpxhZCkKuS1
    let spotURL = 'https://api.spotify.com/v1/users/' + this.userID + '/playlists/' + playlistID + '/tracks';
    console.log(spotURL);
    return this._http.get(spotURL, {headers: new Headers({
      'Authorization': 'Bearer '+ this.bearerToken
    })}).map(res => res.json())
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
