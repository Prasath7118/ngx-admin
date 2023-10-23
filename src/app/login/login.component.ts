import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbCheckboxComponent } from '@nebular/theme';

import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  showMessages: any;
  errors: string[];
  messages: string[];
  user: User = new User();
  userObj: any = {};
  submitted: boolean;
  rememberMe: boolean = true;

  constructor(private authService: AuthService, private router: Router) { }

  login(form: NgForm): void {
    if (!form.valid) {
      this.showMessages.error = true;
      this.errors.push("Form is invalid. Try again.");
      return;
    }
    this.authService.loginUser(this.userObj).subscribe(
      success => {
        console.log(success, 'login success');
        this.router.navigate(['/pages']);
      },
      fail => {
        console.log(fail, 'Failed');

      })
  }

}
