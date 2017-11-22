import {Component, OnInit} from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {AlertService} from "../../services/alert.service";
import {Track} from "../../classes/track";

@Component({
  selector: 'now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css'],
  providers: [SpotifyService]
})
export class NowPlayingComponent implements OnInit {

  public track: Track;

  constructor(private spotifyService: SpotifyService, private alertService: AlertService) {
  }

  ngOnInit() {
    console.log('Getting currently playing song....');
    this.getCurrentlyPlaying(null);
  }

  getCurrentlyPlaying(intervalId) {
    this.spotifyService.getCurrentlyPlaying().subscribe(res => {
        // console.log(res);
        if (res === null) {
          this.alertService.warn('No track is currently playing.')
        } else {
          console.log(res.item);
          this.track = new Track(res.item.uri, res.item.name, res.item.album.images[1].url, res.item.album.name, res.item.artists[0].name);
          console.log(this.track);
          if (intervalId !== null) clearInterval(intervalId);
        }
      },
      err => {
        this.alertService.warn('Error loading now playing. ' + err.statusText);
        // throw new Error(err.statusText);
        window.open(this.spotifyService.getAuthorizeURL(), '_self');
      }
    )
  }

  setRating(rating: Number, uri: string) {
    let elem = document.getElementById('star' + rating);
    // console.log();
    let cssSelected = 'fa fa-star-o fa-3x star-width star-selected';
    let cssUnSelected = 'fa fa-star-o fa-3x star-width star-unselected';
    document.getElementById('star1').className = (rating >= 1) ? cssSelected : cssUnSelected;
    document.getElementById('star2').className = (rating >= 2) ? cssSelected : cssUnSelected;
    document.getElementById('star3').className = (rating >= 3) ? cssSelected : cssUnSelected;
    document.getElementById('star4').className = (rating >= 4) ? cssSelected : cssUnSelected;
    document.getElementById('star5').className = (rating == 5) ? cssSelected : cssUnSelected;
    // elem.className = "fa fa-star-o fa-3x fa-spin star-width star-selected";
    let trackRating = {
      rating: rating,
      trackURI: uri,
      playlistURI: localStorage.getItem('selectedPlaylist')
    };
    console.log(trackRating);
    localStorage.setItem('ratings', JSON.stringify(trackRating));
    console.log('saved rating to local storage');
    this.playNextPrevious('next');
  }

  playNextPrevious(direction: string) {
    this.spotifyService.playNextPrevious(direction).subscribe(res => {
        // update track
      console.log('Updating track in 2 seconds');
        let intervalId = setInterval(() => this.getCurrentlyPlaying(intervalId), 2000);
      },
      err => {
        this.alertService.error(err.statusText);
      }
    )
  }


}
