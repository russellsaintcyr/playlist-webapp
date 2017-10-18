import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css'],
  providers: [SpotifyService]
})
export class PlaylistsComponent implements OnInit {

  private  priv: string;
  public pub: string;
  private tracks: Object;

  constructor(private _spotifyService:SpotifyService) {
  this.priv = 'Privy';
  this.pub = 'Pubby';
 }

  ngOnInit() {
  }

  showPlaylist(event) {
    console.log(event);
    this._spotifyService.getPlaylist('46JHZX9X1hHUpxhZCkKuS1').subscribe(res => {
        console.log(res);
        this.tracks = res.items;
      },
      err => {
        console.log('Error: ' + err.statusText);
      },
      () => console.log("Completed.")
    )
  }

}
