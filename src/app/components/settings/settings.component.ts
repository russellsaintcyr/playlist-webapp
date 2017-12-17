import { Component, OnInit } from '@angular/core';
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public bearerToken: string;
  constructor(private alertService: AlertService) {
    this.bearerToken = localStorage.getItem('bearerToken');
  }

  ngOnInit() {
  }

  setBearerToken() {
    localStorage.setItem('bearerToken', this.bearerToken);
    console.log('Updated local storage.' + this.bearerToken);
  }

  clearRatings() {
    localStorage.removeItem('ratings');
    this.alertService.success('Cleared ratings')
  }
}
