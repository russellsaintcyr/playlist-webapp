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
  public tracks: Object;
  public playlists: Object;

  constructor(private _spotifyService:SpotifyService) {
  this.priv = 'Privy';
  this.pub = 'Pubby';
 }

  ngOnInit() {
    this.showPlaylists();
  }

  showPlaylists() {
    this._spotifyService.getPlaylists().subscribe(res => {
        this.playlists = res.items;
      },
      err => {
        // console.log('Error: ' + err.statusText);
        throw new Error('Bloody hell: ' + err.statusText);
      },
      () => console.log("Completed.")
    )
  }

  setPlaylist(playlistURI: string) {
    localStorage.setItem('selectedPlaylist', playlistURI);
    console.log('Set selectedPlaylist to ' + playlistURI);
  }

  showPlaylist(offset) {
    // console.log(event);
    this._spotifyService.getPlaylist('46JHZX9X1hHUpxhZCkKuS1', offset).subscribe(res => {
        console.log(res);
        this.tracks = res.items;
        localStorage.setItem('tracks-' + offset, JSON.stringify(res.items));
      },
      err => {
        // console.log('Error: ' + err.statusText);
        throw new Error('Bloody hell: ' + err.statusText)
      },
      () => console.log("Completed.")
    )
  }

}
