import {Component, OnInit} from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {AlertService} from "../../services/alert.service";
import {Track} from "../../classes/track";
import {Rating} from "app/classes/rating";

@Component({
  selector: 'now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css'],
  providers: [SpotifyService]
})
export class NowPlayingComponent implements OnInit {

  public track: Track;
  public ratings: Array<Rating>;

  constructor(private spotifyService: SpotifyService, private alertService: AlertService) {
  }

  ngOnInit() {
    console.log('Getting currently playing song....');
    this.getCurrentlyPlaying(null);
    if (localStorage.getItem('ratings') === null) {
      this.alertService.info('No local ratings yet set.');
      this.ratings = [];
      localStorage.setItem('ratings', JSON.stringify(this.ratings));
    } else {
      this.ratings = JSON.parse(localStorage.getItem('ratings'));
      this.alertService.info('Loaded ' + this.ratings.length + ' ratings from local data.');
    }

    if (!Array.prototype.find) {
      console.log('Adding Array.find support');
      Array.prototype.find = function(predicate) {
        if (this == null) {
          throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
          value = list[i];
          if (predicate.call(thisArg, value, i, list)) {
            return value;
          }
        }
        return undefined;
      };
    }

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
          // search for existing rating
          let obj = undefined;
          // confirm we can use find() with array
          if (typeof this.ratings.find === 'function') {
            let obj = this.ratings.find(function (obj: Rating) {
              return obj.trackURI === res.item.uri;
            });
          } else {
            this.alertService.warn('Array.find not supported.')
            let obj = this.ratings.find(function (obj: Rating) {
              return obj.trackURI === res.item.uri;
            });
          }
          if (obj === undefined) {
            // reset stars if no rating
            NowPlayingComponent.showStars(0);
          } else {
            NowPlayingComponent.showStars(obj.rating)
          }
        }
      },
      err => {
        this.alertService.warn('Error loading now playing. ' + err.statusText);
        // throw new Error(err.statusText);
        window.open(this.spotifyService.getAuthorizeURL(), '_self');
      }
    )
  }

  static showStars(rating) {
    let cssSelected = 'fa fa-star-o fa-3x star-width star-selected';
    let cssUnSelected = 'fa fa-star-o fa-3x star-width star-unselected';
    if (document.getElementById('star1') !== null) {
      document.getElementById('star1').className = (rating >= 1) ? cssSelected : cssUnSelected;
      document.getElementById('star2').className = (rating >= 2) ? cssSelected : cssUnSelected;
      document.getElementById('star3').className = (rating >= 3) ? cssSelected : cssUnSelected;
      document.getElementById('star4').className = (rating >= 4) ? cssSelected : cssUnSelected;
      document.getElementById('star5').className = (rating == 5) ? cssSelected : cssUnSelected;
    } else {
      console.log('Failed to get star1 element.');
    }
  }

  setRating(rating: number, uri: string) {
    let elem = document.getElementById('star' + rating);
    // console.log();
    NowPlayingComponent.showStars(rating);
    let newRating = new Rating(uri, rating);
    // search for existing rating
    let obj = this.ratings.find(function (obj: Rating) {
      return obj.trackURI === uri;
    });
    if (obj === undefined) {
      this.ratings.push(newRating);
    } else {
      let xxx = this.ratings.findIndex(function (obj: Rating) {
        return obj.trackURI === uri;
      });
      this.ratings.splice(xxx, 1, newRating);
    }
    localStorage.setItem('ratings', JSON.stringify(this.ratings));
    // TODO enable next line via user preference
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
