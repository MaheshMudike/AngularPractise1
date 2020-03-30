import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [10, 17, 18, 11].map((n) => `assets/courimage${n}.jpg`);
  constructor() { }

  ngOnInit() {
  }

}
