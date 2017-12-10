import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {SpotifyService} from "../../services/spotify.service";
import {AlertService} from "../../services/alert.service";
import {Rating} from "../../classes/rating";

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
  public stars0 = 0;
  public stars1 = 0;
  public stars2 = 0;
  public stars3 = 0;
  public stars4 = 0;
  public stars5 = 0;

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
        let traxx = this.tracks;
        // get ratings if any
        if (localStorage.getItem('ratings') !== null) {
          let ratings = JSON.parse(localStorage.getItem('ratings'));
          // loop through tracks
          for (let x in this.tracks) {
            console.log(this.tracks[x].track.uri);
            // see if have rating
            let obj = ratings.find(function (obj: Rating) {
              return obj.trackURI === traxx[x].track.uri;
            });
            if (obj !== undefined) {
              this.tracks[x].rating = obj.rating;
            } else {
              this.tracks[x].rating = 0;
            }
            console.log(this.tracks[x].rating);
            // add to overall count
            if (this.tracks[x].rating === 0) this.stars0++;
            if (this.tracks[x].rating === 1) this.stars1++;
            if (this.tracks[x].rating === 2) this.stars2++;
            if (this.tracks[x].rating === 3) this.stars3++;
            if (this.tracks[x].rating === 4) this.stars4++;
            if (this.tracks[x].rating === 5) this.stars5++;
          }

        }
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
