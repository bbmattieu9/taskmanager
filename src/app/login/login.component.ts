import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

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
  fieldTextType: boolean;
  signInErrorMsg: any;
  signinHasError: false;
  userSignInForm: FormGroup;
  emailFeedbackMsg: string;
  isLoading = false;

  constructor(private router: Router,
              private loginSrv: LoginService,
              private fb: FormBuilder) { }

              ngUnsubscribe: Subject<void> = new Subject<void>();


  // Returns validation message based on rule e.g required rule
  // Used when watching for changes in email input field
  private validateMessage = {
    required: 'Email is required',
    email: 'Invalid Email'
  };

      /**
       *  Sets feedback message for form control validation
       *   @ param c: it means it retunrs the form control
       *  In this case, the email form control
       */
      setFeedbackMessage(c: AbstractControl): void {
        this.emailFeedbackMsg = '';
        if ((c.touched || c.dirty) && c.errors) {
          this.emailFeedbackMsg = Object.keys(c.errors).map(
            key => this.emailFeedbackMsg += this.validateMessage[key]).join(' ');
        }
      }

              ngOnInit(): void {
                this.userSignInForm = this.fb.group({
                  email: ['', [Validators.required, Validators.email]],
                  password: ['', [Validators.required]]
                });
  }

  toggleFieldTextType(): any {
    this.fieldTextType = !this.fieldTextType;
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
