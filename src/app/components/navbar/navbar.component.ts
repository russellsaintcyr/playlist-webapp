import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [SpotifyService]
})
export class NavbarComponent implements OnInit {

  public isPlaying: boolean;

  constructor(private spotifyService: SpotifyService, private alertService: AlertService) {
    this.spotifyService.getCurrentlyPlaying().subscribe(res => {
        console.log(res);
        this.isPlaying = res.is_playing;
      },
      err => {
        console.log('Error: ' + err.statusText);
      }
    )
  }

  ngOnInit() {
  }

  playNextPrevious(direction:string) {
    this.spotifyService.playNextPrevious(direction).subscribe(res => {
        this.alertService.success('Playing  ' + direction + ' track');
      },
      err => {
        this.alertService.error(err.statusText);
      }
    )
  }

  stop() {

  }

}
