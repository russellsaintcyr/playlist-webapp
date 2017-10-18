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
    this.bearerToken = 'BQBZdSdEliBX3AOIrqbvyvoTqYLrFsJ3N2JFDzWkPrBstZVHYR1z6T2ZoQQXP5RpNddvBjX_Yfp7SEpUC-2EkKBfuG3TEvS64vgFCKv5hHKyQFTTvBB6JXdBan7486-KAK0kQ66JT9Fv9m4IHK7_0i1JMC4s5UF6auiM75etVu-jz5g2gAt1RNlh0xYz-vGR8Z97b-vPIme5XcTX3qEOI-QdHQTK_Bhh1vErNmWupI8TunHuCMfKcDYsA9oTN51NOF0EK2j23Ce4VsnpaWe1dw'
  }

  getPlaylist(playlistID: string, offset: number) {
    // spotify:user:x1111x:playlist:46JHZX9X1hHUpxhZCkKuS1
    let spotURL = 'https://api.spotify.com/v1/users/' + this.userID + '/playlists/' + playlistID + '/tracks?offset=' + offset;
    let headers = new Headers({ 'Authorization': 'Bearer '+ this.bearerToken });
    return this._http.get(spotURL, {headers: headers}).map(res => res.json())
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
