import { Injectable } from '@angular/core';
import {of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isloggedIn: boolean;

  constructor() {
    this.isloggedIn = false;
  }

  login(username: string, password: string): Observable<boolean> {

console.log('username', username);
console.log('password', password);
    if (username == 'admin' && password == 'admin') {
      this.isloggedIn = true;
      return of(this.isloggedIn);
    } else {
      this.isloggedIn = false;
      return of(this.isloggedIn);
    }
  }

}
