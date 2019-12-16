import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { GetdatanodesqlService } from '../getdatanodesql.service';
import { AuthService } from '../authservice';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error;
  loginform: FormGroup;
  constructor(private fb: FormBuilder,private dataservice : GetdatanodesqlService,private auth : AuthService,
    private router : Router) { }


  ngOnInit() {
    this.logindata();
  }
  logindata(){
    this.loginform = this.fb.group({
      userName: ['',Validators.required ],
      password :  ['',Validators.required ]
  })

 
}
sendlogindata(){
   this.auth.login(this.loginform.value)
   .pipe(first())
   .subscribe(
     result => this.router.navigate(['/']),
     err => this.error = 'Could not authenticate'
   );

   //console.log(some)
}

}
