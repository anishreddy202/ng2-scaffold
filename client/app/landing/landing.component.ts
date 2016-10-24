import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing',
  templateUrl: 'landing.component.html',
})
export class LandingComponent implements OnInit {
  name: string;
  message: string;

  constructor() { }

  ngOnInit() {
    this.name = 'IRVUI';
    this.message = "Irving User Interface Team";
  }
}