import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authservice';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
  acToken;
  constructor(private auth :AuthService) {
    this.acToken = this.getAcessToke();
   }

  ngOnInit() {
  }
  getAcessToke(){
    console.log(localStorage.getItem('access_token'))
    if (localStorage.getItem('access_token')) {
      return true;
    }else{
      return false;
    }
  }
  logOut(){
    //windows.localStorage.setItem('')
    //window.localStorage.setItem('access_token', '')
    this.auth.logout();
  }

}
