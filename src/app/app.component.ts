import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  acToken ;
  title = 'Nature School';
  constructor() {

  }
  ngOnInit() {
    console.log('cameee111111');

  }

}

