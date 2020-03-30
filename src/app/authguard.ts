// import { LoginComponent } from './login/login.component';
// import { AuthGuard } from './auth.guard';

// const routes: Routes = [
//   { path: 'todos', component: TodoListComponent, canActivate: [AuthGuard] },
//   { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
//   { path: 'login', component: LoginComponent},
  // ...
// Finally, update client/src/app/auth.guard.ts with the following contents:

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('access_token')) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
