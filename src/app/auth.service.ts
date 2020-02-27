import { Injectable } from '@angular/core';
import {of, Observable } from 'rxjs';
import {ActivatedRouteSnapshot, Router, UrlTree} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isloggedIn: boolean;


  constructor( private router: Router) {
    this.isloggedIn = false;
  }

  login(username: string, password: string): Observable<boolean> {
    if (username == 'admin' && password == 'admin') {
      this.isloggedIn = true;
      return of(this.isloggedIn);
    } else {
      this.isloggedIn = false;
      return of(this.isloggedIn);
    }
  }

  canActivate(route: ActivatedRouteSnapshot): boolean|UrlTree {
    if (!this.isloggedIn) {
      alert('Not allowd. Login first');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
