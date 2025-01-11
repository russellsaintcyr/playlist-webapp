import { Injectable } from '@angular/core';
// TODO migrate from Http to HttpClient
import { Http, Headers } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable()
export class SpotifyService {

  private authURL: string;
  // TODO remove need for user ID
  private readonly userID: string;
  private readonly bearerToken: string;
  private readonly callbackRedirectURI: string;
  private readonly headers;

  constructor(private _http: Http) {
    // save state to return if token expired
    const currentState = location.pathname.substring(1);
    if (currentState !== 'callback') {
      localStorage.setItem('savedState', currentState);
    }
    // TODO remove hard-coded user ID
    this.userID = 'x1111x';
    this.bearerToken = localStorage.getItem('bearerToken');
    // console.log(`location.hostname: ${location.hostname}`);
    // console.log(`location.host: ${location.host}`);
    // console.log(`location.href: ${location.href}`);
    this.callbackRedirectURI = (location.host.includes('github')) ? location.href + 'callback' : `http://${location.host}/callback`;
    console.log(`callbackRedirectURI: ${this.callbackRedirectURI}`);
    this.headers = new Headers({'Authorization': 'Bearer ' + this.bearerToken});
  }

  getPlaylist(playlist, offset: number) {
    const spotURL = 'https://api.spotify.com/v1/users/' + playlist.owner.id + '/playlists/' + playlist.id + '/tracks?offset=' + offset;
    // this.http.get('https://example.com/api/items').pipe(map(data => {})).subscribe(result => {
    //   console.log(result);
    // });
    return this._http.get(spotURL, {headers: this.headers}).pipe(map(res => res.json()))
  }

  searchMusic(searchString: string, type: string) {
    const spotURL = 'https://api.spotify.com/v1/search?q=' + searchString + '&type=' + type;
    return this._http.get(spotURL, {headers: this.headers}).pipe(map(res => res.json()))
  }

  getArtist(artistID: string) {
    const spotURL = 'https://api.spotify.com/v1/artists/' + artistID;
    return this._http.get(spotURL, {headers: this.headers}).pipe(map(res => res.json()))
  }

  getArtistAlbums(artistID: string) {
    const spotURL = 'https://api.spotify.com/v1/artists/' + artistID + '/albums';
    return this._http.get(spotURL, {headers: this.headers}).pipe(map(res => res.json()))
  }

  playNextPrevious(direction) {
    const URL = 'https://api.spotify.com/v1/me/player/' + direction;
    return this._http.post(URL, null, {headers: this.headers});
  };

  getCurrentlyPlaying() {
    const URL = 'https://api.spotify.com/v1/me/player/currently-playing';
    return this._http.get(URL, {headers: this.headers}).pipe(map(res => res.json()))
  };

  controlPlayback(body, verb) {
    const URL = 'https://api.spotify.com/v1/me/player/' + verb;
    return this._http.put(URL, body, {headers: this.headers}).pipe(map(res => res.json()))
  };

  getAuthorizeURL() {
    const client_id = 'e8629f625be5446a8434f03c0063ac27';
    const response_type = 'token'; // Implicit Grant Flow https://developer.spotify.com/web-api/authorization-guide/#implicit-grant-flow
    const redirect_uri = this.callbackRedirectURI;
    const scopes = 'user-read-currently-playing user-read-playback-state playlist-modify-private playlist-modify-public playlist-read-private streaming user-modify-playback-state user-read-currently-playing user-read-recently-played';
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
    return this._http.get(spotURL, {headers: this.headers}).pipe(map(res => res.json()))
  }

  getPlaylists() {
    const spotURL = 'https://api.spotify.com/v1/users/' + this.userID + '/playlists/';
    return this._http.get(spotURL, {headers: this.headers}).pipe(map(res => res.json()))
  }

  createPlaylist(body) {
    const spotURL = 'https://api.spotify.com/v1/users/' + this.userID + '/playlists/';
    return this._http.post(spotURL, body, {headers: this.headers}).pipe(map(res => res.json()))
  }

  addToPlaylist(body, playlistID: string) {
    const spotURL = 'https://api.spotify.com/v1/users/' + this.userID + '/playlists/' + playlistID + '/tracks';
    return this._http.post(spotURL, body, {headers: this.headers}).pipe(map(res => res.json()))
  }

  getAlbum(albumID: string) {
    const spotURL = 'https://api.spotify.com/v1/albums/' + albumID;
    return this._http.get(spotURL, {headers: this.headers}).pipe(map(res => res.json()))
  }

}
