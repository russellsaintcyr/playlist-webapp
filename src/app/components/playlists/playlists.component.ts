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
  public playlists;

  constructor(private _spotifyService: SpotifyService, private alertService: AlertService, private router: Router) {
    this.priv = 'Privy';
    this.pub = 'Pubby';
  }

  ngOnInit() {
    // check if we have playlists
    if (localStorage.getItem('playlists') === null) {
      this.retrievePlaylists();
      this.alertService.info('Retrieved playlists.');
    } else {
      this.playlists = JSON.parse(localStorage.getItem('playlists'));
      this.alertService.info('Loaded playlists from local data.');
    }
  }

  refreshPlaylists() {
    this.playlists = null;
    localStorage.removeItem('playlists');
    this.retrievePlaylists();
    this.alertService.info('Refreshed playlists.');
  }

  reAuthorize(intervalId) {
    // TODO handle auth token globally via new Error
    window.open(this._spotifyService.getAuthorizeURL(), '_self');
    clearInterval(intervalId);
  }

  retrievePlaylists() {
    this._spotifyService.getPlaylists().subscribe(res => {
        this.playlists = res;
        localStorage.setItem('playlists', JSON.stringify(res));
      },
      err => {
        this.alertService.warn('Error retrieving playlists: ' + err.statusText);
        this.alertService.info('Re-authorizing Spotify token in 2 seconds...');
        let intervalId = setInterval(() => this.reAuthorize(intervalId), 2000);
        // throw new Error(err.statusText);
      }
    )
  }

  setPlaylist(playlist) {
    localStorage.setItem('selectedPlaylist', JSON.stringify(playlist));
    // this.alertService.success('Set playlist ID to ' + playlist.id);
    this.router.navigateByUrl('/playlist');
  }

  loadOffset(url) {
    this._spotifyService.getURL(url).subscribe(res => {
        this.playlists = res;
        localStorage.setItem('playlists', JSON.stringify(res));
      },
      err => {
        throw new Error(err.statusText)
      }
    )
  }

  showPlaylist(offset) {
    this._spotifyService.getPlaylist('46JHZX9X1hHUpxhZCkKuS1', offset).subscribe(res => {
        console.log(res);
        this.tracks = res.items;
        localStorage.setItem('tracks-' + offset, JSON.stringify(res.items));
      },
      err => {
        // console.log('Error: ' + err.statusText);
        throw new Error(err.statusText)
      }
    )
  }

}
