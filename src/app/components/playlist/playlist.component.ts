import { Component, OnInit } from '@angular/core';
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
  private selectedPlaylist;
  public tracks: Object;

  constructor(private _http: Http, private _spotifyService: SpotifyService,
              private alertService: AlertService) {
    console.log('loading data');
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
        throw new Error('Bloody hell: ' + err.statusText)
      },
      () => console.log("Completed.")
    )

  }

  playTrack(track) {
    console.log('Playing track ' + track.uri);
    // TODO store track details in case change view
    localStorage.setItem('selectedTrack', JSON.stringify(track));
    // TODO pop up the footer playbar
    // now tell to play
    this._spotifyService.playTrack(track.uri).subscribe(res => {
        // this.tracks = res.items;
        // localStorage.setItem('tracks-' + offset, JSON.stringify(res.items));
      },
      err => {
        this.alertService.error(err.statusText);
        // throw new Error(err.statusText);
      },
      () => console.log("Completed calling playTrack.")
    )
  };

  loadLocalFile() {
    let url = 'assets/data/46JHZX9X1hHUpxhZCkKuS1.tracks.json';
    // let headers = new Headers({ 'Authorization': 'Bearer '+ this.bearerToken });
    return this._http.get(url).map(res => res.json())
  }

}
