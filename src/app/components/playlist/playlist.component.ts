import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {SpotifyService} from "../../services/spotify.service";
import {AlertService} from "../../services/alert.service";
import {Rating} from "../../classes/rating";
import {NowPlayingComponent} from "../now-playing/now-playing.component";
import {AfterViewChecked} from "@angular/core";
import {Track} from "../../classes/track";
import {MetaTrack} from "../../classes/metatrack";

@Component({
  selector: 'playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
  providers: [SpotifyService]
})
export class PlaylistComponent implements OnInit, AfterViewChecked {

  // private playlistID: string; //46JHZX9X1hHUpxhZCkKuS1
  public selectedPlaylist;
  public tracks: Array<MetaTrack>;
  public stars0 = 0;
  public stars1 = 0;
  public stars2 = 0;
  public stars3 = 0;
  public stars4 = 0;
  public stars5 = 0;
  public ratings: Array<Rating>;
  public playlist;
  private ratingsLoaded: boolean;

  constructor(private _http: Http, private _spotifyService: SpotifyService,
              private alertService: AlertService) {
    this.ratingsLoaded = false;
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked called.');
    this.getRatings();
    // console.log('ratingsLoaded=' + this.ratingsLoaded);
  }

  clearRatingCounts() {
    this.stars0 = 0;
    this.stars1 = 0;
    this.stars2 = 0;
    this.stars3 = 0;
    this.stars4 = 0;
    this.stars5 = 0;
  }

  ngOnInit() {
    console.log('ngOnInit called.');
    this.selectedPlaylist = JSON.parse(localStorage.getItem('selectedPlaylist'));
    document.body.style.backgroundImage = "url('" + this.selectedPlaylist.images[0].url + "')";
    this._spotifyService.getPlaylist(this.selectedPlaylist, 0).subscribe(res => {
        this.tracks = res.items;
        this.playlist = res;
      },
      err => {
        // console.log('Error: ' + err.statusText);
        window.open(this._spotifyService.getAuthorizeURL(), '_self');
        throw new Error(err.statusText)
      }
    );
  }

  setRating(rating: number, track) {
    let elem = document.getElementById('star' + rating);
    // console.log();
    NowPlayingComponent.showStars(rating, track.id, null);
    let newRating = new Rating(track.uri, rating);
    // search for existing rating
    let obj = undefined;
    if (this.ratings !== undefined) {
      obj = this.ratings.find(function (obj: Rating) {
        return obj.trackURI === track.uri;
      });
    } else {
      this.ratings = [];
    }
    // no rating
    if (obj === undefined) {
      this.ratings.push(newRating);
    } else {
      let oldRating = -1;
      let xxx = this.ratings.findIndex(function (obj: Rating) {
        oldRating = track.rating;
        return obj.trackURI === track.uri;
      });
      // decrement any previous rating!
      if (oldRating === 0) this.stars0--;
      if (oldRating === 1) this.stars1--;
      if (oldRating === 2) this.stars2--;
      if (oldRating === 3) this.stars3--;
      if (oldRating === 4) this.stars4--;
      if (oldRating === 5) this.stars5--;
      this.ratings.splice(xxx, 1, newRating);
    }
    localStorage.setItem('ratings', JSON.stringify(this.ratings));
    // increment
    if (rating === 0) this.stars0++;
    if (rating === 1) this.stars1++;
    if (rating === 2) this.stars2++;
    if (rating === 3) this.stars3++;
    if (rating === 4) this.stars4++;
    if (rating === 5) this.stars5++;
  }

  getRatings() {
    if (this.tracks === undefined) {
      console.log('Tracks not yet defined so not getting ratings.');
      return;
    }
    let traxx = this.tracks;
    if (localStorage.getItem('ratings') !== null) {
      this.ratings = JSON.parse(localStorage.getItem('ratings'));
      console.log('Loaded ' + this.ratings.length + ' ratings.');
      // loop through all tracks and adjust stars
      console.log('Looping through tracks');
      for (let x in this.tracks) {
        // first ensure is loaded in DOM
        if (document.getElementById('star1-' + this.tracks[x].track.id) === null) {
          console.log('Exiting for loop because DOM is not ready');
          break;
        }
        // see if have rating
        let obj = undefined;
        if (this.ratings !== undefined) {
          obj = this.ratings.find(function (obj: Rating) {
            return obj.trackURI === traxx[x].track.uri;
          });
        } else {
          this.ratings = [];
        }
        // set to 0 if no rating
        if (obj !== undefined) {
          this.tracks[x].track.rating = obj.rating;
        } else {
          this.tracks[x].track.rating = 0;
        }
        // change the HTML
        NowPlayingComponent.showStars(this.tracks[x].track.rating, this.tracks[x].track.id, null);
        // increment
        if (this.tracks[x].track.rating === 0) this.stars0++;
        if (this.tracks[x].track.rating === 1) this.stars1++;
        if (this.tracks[x].track.rating === 2) this.stars2++;
        if (this.tracks[x].track.rating === 3) this.stars3++;
        if (this.tracks[x].track.rating === 4) this.stars4++;
        if (this.tracks[x].track.rating === 5) this.stars5++;
      }
      console.log('Done looping through tracks');
      this.ratingsLoaded = true;
    } else {
      console.log('No ratings found in local storage');
    }
  }

  showAllTracks() {
    // call with offset, and then add
    this._spotifyService.getURL(this.playlist.next).subscribe(res => {
        console.log('Pushing ' + res.items.length + ' to tracks array.');
        res.items.forEach(element => {
          this.tracks.push(element);
        });
        console.log('Tracks array length: ' + this.tracks.length);
      },
      err => {
        throw new Error(err.statusText)
      }
    )
  }

  updateCounts() {
    this.clearRatingCounts();
    this.getRatings();
  }

  loadOffset(url) {
    this._spotifyService.getURL(url).subscribe(res => {
        this.tracks = res.items;
        this.playlist = res;
      },
      err => {
        throw new Error(err.statusText)
      }
    )
  }

  playRating(rating: number, action: string) {
    let arrTracks = [];
    for (let x in this.tracks) {
      // console.log(this.tracks[x].uri + ' ' + this.tracks[x].rating);
      if (this.tracks[x].track.rating === rating) {
        arrTracks.push(this.tracks[x].track.uri);
      }
    }
    if (arrTracks.length > 0) {
      if (action === 'play') {
        this.alertService.info('Playing selected tracks');
        this._spotifyService.controlPlayback({uris: arrTracks}, 'play').subscribe(res => {
            console.log('Playback successfully called');
          },
          err => {
            this.alertService.error(err.statusText);
          }
        )
      } else {
        this.alertService.info('Creating new playlist');
        // TODO get playlist name from user?
        let playlistName = rating + '-star Tracks';
        // first create playlist, then add tracks
        this._spotifyService.createPlaylist({name: playlistName}).subscribe(res => {
            this._spotifyService.addToPlaylist({uris: arrTracks}, res.id).subscribe(res2 => {
                this.alertService.success('Created new playlist ' + playlistName + ' with ' + arrTracks.length + ' tracks.');
              },
              err => {
                this.alertService.error(err.statusText);
              }
            )
          },
          err => {
            this.alertService.error(err.statusText);
          }
        )
      }
    } else {
      this.alertService.info('No songs assigned to this rating.');
    }
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
        // console.log(res);
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
