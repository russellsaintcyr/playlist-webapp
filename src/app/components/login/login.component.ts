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
    window.open(this._spotifyService.getAuthorizeURL(), '_self');
  }
}
