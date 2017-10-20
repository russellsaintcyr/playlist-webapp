import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public bearerToken: string;
  constructor() {
    this.bearerToken = localStorage.getItem('bearerToken');
  }

  ngOnInit() {
  }

  setBearerToken() {
    localStorage.setItem('bearerToken', this.bearerToken);
    console.log('Updated local storage.' + this.bearerToken);
    alert('Updated local token');
  }
}
