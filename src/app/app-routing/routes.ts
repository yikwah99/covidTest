import { Routes } from '@angular/router';


import { ManageTestkitComponent } from '../manage-testkit/manage-testkit.component';
import { TestcentreRegisterComponent } from '../testcentre-register/testcentre-register.component';
import { UserRegisterComponent } from '../user-register/user-register.component';
import { LoginComponent } from '../login/login.component';

export const routes: Routes = [
  { path: 'register',     component: UserRegisterComponent },
  { path: 'login',     component: LoginComponent },

  /*test manager*/
  { path: 'rCentre',  component: TestcentreRegisterComponent },
  { path: 'manageTestKit',  component: ManageTestkitComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
