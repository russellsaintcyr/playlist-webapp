import {Component, OnInit} from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [SpotifyService]
})
export class DashboardComponent implements OnInit {

  searchStr: string;

  keyPressed() {
    console.log(this.searchStr);
    this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
        console.log(res.artists.items);
      },
      err => {
        console.log('Error: ' + err.statusText);
      }
    )
  }

  constructor(private _spotifyService: SpotifyService) {
  }

  ngOnInit() {
  }

}
