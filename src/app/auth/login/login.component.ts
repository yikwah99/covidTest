import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth.services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService){}

  ngOnInit(): void {}
  onLogin(form: NgForm) {
    console.log(form.value);
    if (form.invalid) {
      return;
    } else {
      console.log('Form Submitted!');
    }
    this.authService.login(form.value.username, form.value.password);
    form.resetForm();
  }
}
