import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  Roles: any = ['Patient','Test Centre Manager', 'Test Centre Officer', 'Tester'];
  constructor() { }

  ngOnInit(): void {
  }

}
