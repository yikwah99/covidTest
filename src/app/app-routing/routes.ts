import { Routes } from '@angular/router';



import { FormRegisterComponent } from '../form-register/form-register.component';
import { UserRegisterComponent } from '../user-register/user-register.component';
import { LoginComponent } from '../login/login.component';

export const routes: Routes = [
  { path: 'rCentre',  component: FormRegisterComponent },
  { path: 'user',     component: UserRegisterComponent },
  { path: 'login',     component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
