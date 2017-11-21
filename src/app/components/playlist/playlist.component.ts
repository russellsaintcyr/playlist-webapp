import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {SpotifyService} from "../../services/spotify.service";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
  providers: [SpotifyService]
})
export class PlaylistComponent implements OnInit {

  // private playlistID: string; //46JHZX9X1hHUpxhZCkKuS1
  public selectedPlaylist;
  public tracks: Object;

  constructor(private _http: Http, private _spotifyService: SpotifyService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    // this.loadLocalFile();
    // this.loadLocalFile().subscribe(res => {
    //   this.tracks = res;
    // })
    this.selectedPlaylist = JSON.parse(localStorage.getItem('selectedPlaylist'));
    this._spotifyService.getPlaylist(this.selectedPlaylist, 0).subscribe(res => {
        this.tracks = res.items;
      },
      err => {
        // console.log('Error: ' + err.statusText);
        window.open(this._spotifyService.getAuthorizeURL(), '_self');
        throw new Error(err.statusText)
      }
    )

  }

  playAllTracks() {
    this._spotifyService.controlPlayback({context_uri: this.selectedPlaylist.uri}, 'play').subscribe(res => {
        this.alertService.success('Playing all tracks in playlist');
      },
      err => {
        this.alertService.error(err.statusText);
        // throw new Error(err.statusText);
      }
    )
  }

  playTrack(track) {
    localStorage.setItem('selectedTrack', JSON.stringify(track));
    // now tell to play
    this._spotifyService.controlPlayback({uris: [track.uri]}, 'play').subscribe(res => {
        console.log(res);
      },
      err => {
        this.alertService.error(err.statusText);
        // throw new Error(err.statusText);
      }
    )
  };

  loadLocalFile() {
    let url = 'assets/data/46JHZX9X1hHUpxhZCkKuS1.tracks.json';
    // let headers = new Headers({ 'Authorization': 'Bearer '+ this.bearerToken });
    return this._http.get(url).map(res => res.json())
  }

}
