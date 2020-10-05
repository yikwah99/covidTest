import { Routes } from '@angular/router';


import { ManageTestkitComponent } from '../manage-testkit/manage-testkit.component';
import { TestcentreRegisterComponent } from '../testcentre-register/testcentre-register.component';
import { UserRegisterComponent } from '../user-register/user-register.component';
import { LoginComponent } from '../login/login.component';
import { RecordTestComponent } from '../record-test/record-test.component';
import { UpdateTestComponent } from '../update-test/update-test.component';
import { ViewTestComponent } from '../view-test/view-test.component';


export const routes: Routes = [
  { path: 'register',     component: UserRegisterComponent },
  { path: 'login',     component: LoginComponent },

  /*test manager*/
  { path: 'rCentre',  component: TestcentreRegisterComponent },
  { path: 'manageTestKit',  component: ManageTestkitComponent },
  /*tester/patient*/
  { path: 'recordTest',  component: RecordTestComponent },
  { path: 'updateTest',  component: UpdateTestComponent },
  { path: 'viewTest',  component: ViewTestComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
