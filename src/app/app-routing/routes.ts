import { Routes } from '@angular/router';

import { TestcentreComponent } from '../testcentre/testcentre.component';
import { ManageTestkitComponent } from '../manage-testkit/manage-testkit.component';
import { TestcentreRegisterComponent } from '../testcentre-register/testcentre-register.component';
import { UserRegisterComponent } from '../user-register/user-register.component';
import { LoginComponent } from '../login/login.component';
import { RecordTestComponent } from '../record-test/record-test.component';
import { UpdateTestComponent } from '../update-test/update-test.component';
import { ViewTestComponent } from '../view-test/view-test.component';
import { RecordOfficerComponent } from '../record-officer/record-officer.component';
import { GenerateReportComponent } from '../generate-report/generate-report.component';

export const routes: Routes = [
  { path: 'register',     component: UserRegisterComponent },
  { path: 'login',     component: LoginComponent },

  /*test manager*/
  {path: 'testcentre',  component: TestcentreComponent },
  { path: 'rCentre',  component: TestcentreRegisterComponent },
  { path: 'manageTestKit',  component: ManageTestkitComponent },
  {path:'recordOfficer', component: RecordOfficerComponent},
  {path:'generateReport', component: GenerateReportComponent },
  /*tester/patient*/
  { path: 'recordTest',  component: RecordTestComponent },
  { path: 'updateTest',  component: UpdateTestComponent },
  { path: 'viewTest',  component: ViewTestComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
