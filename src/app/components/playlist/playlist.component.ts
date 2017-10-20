import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
  providers: [SpotifyService]
})
export class PlaylistComponent implements OnInit {

  private playlistID: string = '46JHZX9X1hHUpxhZCkKuS1';
  public tracks: Object;

  constructor(private _http: Http, private _spotifyService: SpotifyService) {
    console.log('loading data');
  }

  ngOnInit() {
    // console.log(tra?cks2017);
    this.loadLocalFile();
    this.loadLocalFile().subscribe(res => {
      this.tracks = res;
    })
  }

  playTrack(trackURI) {
    console.log('Playing track ' + trackURI);
    this._spotifyService.playTrack(trackURI).subscribe(res => {
        console.log(res);
        // this.tracks = res.items;
        // localStorage.setItem('tracks-' + offset, JSON.stringify(res.items));
      },
      err => {
        console.log('Error: ' + err.statusText);
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
