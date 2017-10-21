import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'song-view',
  templateUrl: './song-view.component.html',
  styleUrls: ['./song-view.component.css']
})
export class SongViewComponent implements OnInit {

  public track: Object;

  constructor() { }

  ngOnInit() {
    this.track = JSON.parse(localStorage.getItem('selectedTrack'));
  }

}
