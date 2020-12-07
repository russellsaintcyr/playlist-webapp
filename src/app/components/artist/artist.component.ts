import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
  providers: [SpotifyService]
})
export class ArtistComponent implements OnInit {
  private artist: any;

  constructor(private spotifyService: SpotifyService, private alertService: AlertService) {

  }

  ngOnInit() {
    if (localStorage.getItem('artistID') === null) {
      this.alertService.error('No artistID found in local storage.');
    } else {
      const artistID = localStorage.getItem('artistID');
      this.spotifyService.getArtist(artistID).subscribe(response => {
          this.artist = response;
          console.log(this.artist);
        }, err => {
          console.debug(err);
          this.alertService.error(err._body);
        }
      )
    }  }

}
