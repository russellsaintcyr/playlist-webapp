import { Component, OnInit } from '@angular/core';
import {Rating} from "../../classes/rating";

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  public ratings: Array<Rating>;
  public stars1 = 0;
  public stars2 = 0;
  public stars3 = 0;
  public stars4 = 0;
  public stars5 = 0;

  constructor() { }

  ngOnInit() {
    this.ratings = JSON.parse(localStorage.getItem('ratings'));
    console.log(this.ratings.length + ' ratings found.');
    for (let i = 0; i < this.ratings.length; i++) {
      if (this.ratings[i].rating === 1) this.stars1++;
      if (this.ratings[i].rating === 2) this.stars2++;
      if (this.ratings[i].rating === 3) this.stars3++;
      if (this.ratings[i].rating === 4) this.stars4++;
      if (this.ratings[i].rating === 5) this.stars5++;
    }
  }

}
