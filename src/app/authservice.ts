import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  login(data): Observable<boolean> {
    return this.http.post<{token: string}>('http://10.80.15.93:8080/login', {username: data.userName, password: data.password})
      .pipe(
        map(result => {
            console.log(result)
          localStorage.setItem('access_token', result.token);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
    window.location.reload();
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}