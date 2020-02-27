import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  invalidCredentialMsg: string = 'Username or Password mismatch';
  username: string;
  password: string;
  loading = false;
  error = false;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {

  }

  onFormSubmit(loginForm) {
    this.authService.login(loginForm.value.username, loginForm.value.password)
      .subscribe(data => {
      if (data == true) {
        this.router.navigate( ['notes']);
      } else {
        this.error = true;
      }
    },
        err => {
          this.error = true;
        })
  }
}
