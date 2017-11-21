import { Component, OnInit } from '@angular/core';
import {Track} from "../../classes/track";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'song-view',
  templateUrl: './song-view.component.html',
  styleUrls: ['./song-view.component.css']
})
export class SongViewComponent implements OnInit {

  public track: Track;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    let trakk = JSON.parse(localStorage.getItem('selectedTrack'));
    if (trakk !== null) {
      this.track = new Track(trakk.uri, trakk.name, trakk.album.images[1].url, trakk.album.name, trakk.artists[0].name);
    } else {
      this.alertService.warn('No selectedTrack found locally.')
    }
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
  }

}
