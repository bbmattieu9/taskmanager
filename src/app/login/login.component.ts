import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginViewModel } from '../model/login-view-model';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel: LoginViewModel = new LoginViewModel();
  loginError: '';

  constructor(private router: Router,
              private loginSrv: LoginService) { }

  ngOnInit(): void {
  }

  onLogin(event): any {
    this.loginSrv.login(this.loginModel).subscribe(
      (response) => {
        this.router.navigateByUrl('/dashboard');
      },
      (error) => {
        console.log('[Error]: Could not sign in', error);
      });
  }

}
