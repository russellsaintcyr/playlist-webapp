import {Component, OnInit} from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {AlertService} from "../../services/alert.service";
import {Router} from "@angular/router";

@Component({
  selector: 'playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css'],
  providers: [SpotifyService]
})
export class PlaylistsComponent implements OnInit {

  private priv: string;
  public pub: string;
  public tracks: Object;
  public playlists: Object;

  constructor(private _spotifyService:SpotifyService, private alertService: AlertService, private router: Router) {
    this.priv = 'Privy';
    this.pub = 'Pubby';
  }

  ngOnInit() {
    this.showPlaylists();
  }

  reAuthorize(intervalId) {
    // TODO handle auth token globally via new Error
    window.open(this._spotifyService.getAuthorizeURL(), '_self');
    clearInterval(intervalId);
  }

  showPlaylists() {
    this._spotifyService.getPlaylists().subscribe(res => {
        this.playlists = res.items;
      },
      err => {
        this.alertService.warn('Error retrieving playlists: ' + err.statusText);
        this.alertService.info('Re-authorizing Spotify token in 2 seconds...');
        let intervalId = setInterval( () => this.reAuthorize(intervalId), 2000);
        // throw new Error('Bloody hell: ' + err.statusText);
      },
      () => console.log("Completed.")
    )
  }

  setPlaylist(playlist) {
    localStorage.setItem('selectedPlaylist', JSON.stringify(playlist));
    // localStorage.setItem('selectedPlaylistID', playlist.id);
    // this.alertService.success('Set playlist ID to ' + playlist.id);
    this.router.navigateByUrl('/playlist');
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
