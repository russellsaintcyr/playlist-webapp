import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {AlertService} from "./alert.service";

@Injectable()
export class SpotifyService {

  private searchURL: string;
  private authURL: string;
  // TODO remove need for user ID
  private userID: string;
  private bearerToken: string;
  private baseURL: string;
  private headers;

  constructor(private _http: Http, private alertService: AlertService) {
    // TODO remove hard-coded user ID
    this.userID = 'x1111x';
    this.bearerToken = localStorage.getItem('bearerToken');
    this.baseURL = location.hostname;
    if (location.port !== '') this.baseURL += ':' + location.port;
    this.headers = new Headers({ 'Authorization': 'Bearer '+ this.bearerToken });
  }

  getPlaylist(playlist, offset: number) {
    // spotify:user:x1111x:playlist:46JHZX9X1hHUpxhZCkKuS1
    // spotify:user:dan_deacon_official:playlist:6IcAMCeYekGcJWfXxuIcuM
    let spotURL = 'https://api.spotify.com/v1/users/' + playlist.owner.id + '/playlists/' + playlist.id + '/tracks?offset=' + offset;
    return this._http.get(spotURL, {headers: this.headers}).map(res => res.json())
  }

  searchMusic(str: string, type = 'artist') {
    this.searchURL = 'https://api.spotify.com/v1/search?q=foo&type=artist';
    return this._http.get(this.searchURL, {headers: new Headers({
      // 'ZZZ': 'fee',
      // 'Zac-Meister': 'Nbnb mnb mnb'
    })}).map(res => res.json())
  }

  playNextPrevious(direction) {
    let URL = 'https://api.spotify.com/v1/me/player/' + direction;
    return this._http.post(URL, null,{headers: this.headers}).map(res => res.json())
  };

  getCurrentlyPlaying() {
    let URL = 'https://api.spotify.com/v1/me/player/currently-playing';
    return this._http.get(URL,{headers: this.headers}).map(res => res.json())
  };

  controlPlayback(body, verb) {
    let URL = 'https://api.spotify.com/v1/me/player/' + verb;
    return this._http.put(URL, body, {headers: this.headers}).map(res => res.json())
  };

  // authorize() {
  //   // need to set the scopes below
  //   // user-read-currently-playing
  //   // user-read-playback-state
  //
  //   const headers = new Headers({
  //     // 'Access-Control-Allow-Origin': '*'
  //     // headers.set("Access-Control-Allow-Methods", "GET");
  //   });
  //   // headers.set("Access-Control-Allow-Origin", "*");
  //   // headers.set("Access-Control-Allow-Methods", "GET");
  //   // headers.set("Foo", "yo yo yo");
  //
  //   // Implicit Grant Flow
  //   // Implicit grant flow is for clients that are implemented entirely using JavaScript and running in the resource owner’s browser.
  //   //   You do not need any server-side code to use it. Rate limits for requests are improved but there is no refresh token provided.
  //   //   This flow is described in RFC-6749.
  //   return this._http.get(this.authURL, {headers: headers}).map(res => res.json())
  // }

  getAuthorizeURL() {
    let client_id = 'e8629f625be5446a8434f03c0063ac27';
    let response_type = 'token'; // Implicit Grant Flow https://developer.spotify.com/web-api/authorization-guide/#implicit-grant-flow
    let redirect_uri = 'http://' + this.baseURL + '/callback';
    // let scopes = 'user-modify-playback-state';
    let scopes = 'user-read-currently-playing user-read-playback-state playlist-modify-private playlist-modify-public playlist-read-private streaming user-modify-playback-state user-read-currently-playing user-read-recently-played';
    console.log('Spotify scopes: ' + scopes);
    this.authURL = 'http://accounts.spotify.com/authorize?client_id=' + client_id +
      '&scope=' + encodeURIComponent(scopes) +
      '&response_type=' + response_type +
      '&show_dialog=false' +
      '&redirect_uri=' + encodeURIComponent(redirect_uri);
    // console.log(this.authURL);
    return this.authURL;
  }

  getURL(spotURL) {
    return this._http.get(spotURL, {headers: this.headers}).map(res => res.json())
  }

  getPlaylists() {
    let spotURL = 'https://api.spotify.com/v1/users/' + this.userID + '/playlists/';
    return this._http.get(spotURL, {headers: this.headers}).map(res => res.json())
  }
}
