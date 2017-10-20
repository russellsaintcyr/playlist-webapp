import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [SpotifyService]
})
export class LoginComponent implements OnInit {

  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  authorizeUser() {
    let client_id = 'e8629f625be5446a8434f03c0063ac27';
    // let response_type = 'token';
    // let redirect_uri = 'http://localhost:4200/callback';
    // let scopes = 'user-read-currently-playing user-read-playback-state playlist-modify-private';
    // let authURL = 'http://accounts.spotify.com/authorize?client_id=' + client_id +
    //   '&response_type=' + response_type +
    //   '&redirect_uri=' + encodeURIComponent(redirect_uri) +
    //   '&scopes=' + encodeURIComponent(scopes);
    window.open(this._spotifyService.getAuthorizeURL(), '_self');
    // this._spotifyService.authorize().subscribe(res => {
    //     console.log(res);
    //   },
    //   err => {
    //     console.log('Error: ' + err.statusText);
    //   },
    //   () => console.log("Completed calling authorize.")
    // )

  }
}
