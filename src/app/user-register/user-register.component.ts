import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit {
  Roles: any = ['Patient','Test Centre Manager', 'Tester'];
  constructor() { }

  ngOnInit(): void {}

  onRegister(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      console.log('Form Submitted!');
    }

    form.resetForm();
  }

}
