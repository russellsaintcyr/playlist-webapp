import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {AlertService} from "./alert.service";

@Injectable()
export class SpotifyService {

  private searchURL: string;
  private authURL: string;
  private userID: string;
  private bearerToken: string;

  constructor(private _http: Http, private alertService: AlertService) {
    this.userID = 'x1111x';
    // TODO set this via property, or a field, so can update via mobile
    // The access token must have the user-modify-playback-state scope authorized in order to control playback
    // this.bearerToken = 'BQBzIWy4SRHKbGDzoQZjAP2ZqvrMfozw_fcAKuh9vahnqW3ztPWtlRI5zNXc85qMXB1pXqg57J44z6yiNNm4k8aQZLoH3orq48Nxkru3thKaf8tDWYWaNNaYRDRCca26qqbbL5fU3nnvA9X8PeG9Mk7mrfmwf8t0v6H193PX9v8YgTo8hGB6WLVV-_tqFMMmd7d8yzSA2zWJhHXTOBKTxD4rvfBBs97YBw6kc_hPlULFooJpoYMnPiyYdhigEb8yMWtJ1Rl5YKG265YnuwgFDA';
    this.bearerToken = localStorage.getItem('bearerToken');
  }

  getPlaylist(playlist, offset: number) {
    if (this.bearerToken === undefined || this.bearerToken === null) {
      alert('No bearer auth token found');
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
      alert('No bearer auth token found');
      return;
    }
    this.searchURL = 'https://api.spotify.com/v1/search?q=foo&type=artist';
    return this._http.get(this.searchURL, {headers: new Headers({
      // 'ZZZ': 'fee',
      // 'Zac-Meister': 'Nbnb mnb mnb'
    })}).map(res => res.json())
  }

  playTrack(trackURIs) {
    if (trackURIs === undefined) {
      // TODO provide message service or toasts
      alert('No track URIs provided');
      return;
    }
    if (this.bearerToken === undefined || this.bearerToken === null) {
      alert('No bearer auth token found');
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
    let response_type = 'token';
    let redirect_uri = 'http://localhost:4200/callback';
    let scopes = 'user-read-currently-playing user-read-playback-state playlist-modify-private playlist-modify-public playlist-read-private streaming user-modify-playback-state user-read-currently-playing user-read-recently-played';
    this.authURL = 'http://accounts.spotify.com/authorize?client_id=' + client_id +
      '&response_type=' + response_type +
      '&redirect_uri=' + encodeURIComponent(redirect_uri) +
      '&scopes=' + encodeURIComponent(scopes);
    console.log(this.authURL);
    return this.authURL;
  }

  getURL(spotURL) {
    if (this.bearerToken === undefined || this.bearerToken === null) {
      alert('No bearer auth token found');
      return;
    }
    let headers = new Headers({ 'Authorization': 'Bearer '+ this.bearerToken });
    return this._http.get(spotURL, {headers: headers}).map(res => res.json())
  }

  getPlaylists() {
    if (this.bearerToken === undefined || this.bearerToken === null) {
      alert('No bearer auth token found');
      return;
    }
    let spotURL = 'https://api.spotify.com/v1/users/' + this.userID + '/playlists/';
    let headers = new Headers({ 'Authorization': 'Bearer '+ this.bearerToken });
    return this._http.get(spotURL, {headers: headers}).map(res => res.json())
  }
}
