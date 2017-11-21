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

  constructor(private _http: Http, private alertService: AlertService) {
    // TODO remove hard-coded user ID
    this.userID = 'x1111x';
    this.bearerToken = localStorage.getItem('bearerToken');
    this.baseURL = location.hostname;
    if (location.port !== '') this.baseURL += ':' + location.port;

    // this.getCurrentlyPlaying().subscribe(res => {
    //     console.log(res);
    //   },
    //   err => {
    //     console.log('Error: ' + err.statusText);
    //   }
    // )
  }

  getPlaylist(playlist, offset: number) {
    if (this.bearerToken === undefined || this.bearerToken === null) {
      this.alertService.error('No bearer auth token found [getPlaylist]');
      return;
    }
    // spotify:user:x1111x:playlist:46JHZX9X1hHUpxhZCkKuS1
    // spotify:user:dan_deacon_official:playlist:6IcAMCeYekGcJWfXxuIcuM
    let spotURL = 'https://api.spotify.com/v1/users/' + playlist.owner.id + '/playlists/' + playlist.id + '/tracks?offset=' + offset;
    let headers = new Headers({ 'Authorization': 'Bearer '+ this.bearerToken });
    return this._http.get(spotURL, {headers: headers}).map(res => res.json())
  }

  searchMusic(str: string, type = 'artist') {
    if (this.bearerToken === undefined || this.bearerToken === null) {
      this.alertService.error('No bearer auth token found [searchMusic]');
      return;
    }
    this.searchURL = 'https://api.spotify.com/v1/search?q=foo&type=artist';
    return this._http.get(this.searchURL, {headers: new Headers({
      // 'ZZZ': 'fee',
      // 'Zac-Meister': 'Nbnb mnb mnb'
    })}).map(res => res.json())
  }

  playContextURI(context_uri) {
    if (context_uri === undefined) {
      this.alertService.error('No context_uri provided [playContextURI]');
      return;
    }
    if (this.bearerToken === undefined || this.bearerToken === null) {
      this.alertService.error('No bearer auth token found [playContextURI]');
      return;
    }
    let URL = 'https://api.spotify.com/v1/me/player/play';
    let headers = new Headers({ 'Authorization': 'Bearer '+ this.bearerToken });
    let body = {
      context_uri : context_uri
    };
    return this._http.put(URL, body, {headers: headers}).map(res => res.json())
  };

  playNextPrevious(direction) {
    if (this.bearerToken === undefined || this.bearerToken === null) {
      this.alertService.error('No bearer auth token found [playNextPrevious]');
      return;
    }
    let URL = 'https://api.spotify.com/v1/me/player/' + direction;
    let headers = new Headers({ 'Authorization': 'Bearer '+ this.bearerToken });
    return this._http.post(URL, null,{headers: headers}).map(res => res.json())
  };


  getCurrentlyPlaying() {
    if (this.bearerToken === undefined || this.bearerToken === null) {
      this.alertService.error('No bearer auth token found [playNextPrevious]');
      return;
    }
    let URL = 'https://api.spotify.com/v1/me/player/currently-playing';
    let headers = new Headers({ 'Authorization': 'Bearer '+ this.bearerToken });
    return this._http.get(URL,{headers: headers}).map(res => res.json())
  };

  playTrack(trackURIs) {
    if (trackURIs === undefined) {
      // TODO provide message service or toasts
      this.alertService.error('No track URIs provided [playTrack]');
      return;
    }
    if (this.bearerToken === undefined || this.bearerToken === null) {
      this.alertService.error('No bearer auth token found [playTrack]');
      return;
    }
    let URL = 'https://api.spotify.com/v1/me/player/play';
    let headers = new Headers({ 'Authorization': 'Bearer '+ this.bearerToken });
    let body = {
      uris : [trackURIs]
    };
    return this._http.put(URL, body, {headers: headers}).map(res => res.json())
  };

  authorize() {
    // need to set the scopes below
    // user-read-currently-playing
    // user-read-playback-state

    const headers = new Headers({
      // 'Access-Control-Allow-Origin': '*'
      // headers.set("Access-Control-Allow-Methods", "GET");
    });
    // headers.set("Access-Control-Allow-Origin", "*");
    // headers.set("Access-Control-Allow-Methods", "GET");
    // headers.set("Foo", "yo yo yo");

    // Implicit Grant Flow
    // Implicit grant flow is for clients that are implemented entirely using JavaScript and running in the resource owner’s browser.
    //   You do not need any server-side code to use it. Rate limits for requests are improved but there is no refresh token provided.
    //   This flow is described in RFC-6749.
    return this._http.get(this.authURL, {headers: headers}).map(res => res.json())
  }

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
      '&show_dialog=true' +
      '&redirect_uri=' + encodeURIComponent(redirect_uri);
    // console.log(this.authURL);
    return this.authURL;
  }

  getURL(spotURL) {
    if (this.bearerToken === undefined || this.bearerToken === null) {
      this.alertService.error('No bearer auth token found [getURL]');
      return;
    }
    let headers = new Headers({ 'Authorization': 'Bearer '+ this.bearerToken });
    return this._http.get(spotURL, {headers: headers}).map(res => res.json())
  }

  getPlaylists() {
    if (this.bearerToken === undefined || this.bearerToken === null) {
      this.alertService.error('No bearer auth token found [getPlaylists]');
      return;
    }
    let spotURL = 'https://api.spotify.com/v1/users/' + this.userID + '/playlists/';
    let headers = new Headers({ 'Authorization': 'Bearer '+ this.bearerToken });
    return this._http.get(spotURL, {headers: headers}).map(res => res.json())
  }
}
