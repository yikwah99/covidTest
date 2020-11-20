import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth.services';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit {
  Roles: any = ['Patient','Test Centre Manager', 'Tester'];
  constructor(public authService: AuthService) { }

  ngOnInit(): void {}

  onRegister(form: NgForm) {
    if (form.invalid){
      return;
    }
    this.authService.createdUser(form.value.username,form.value.password);
  }


}
