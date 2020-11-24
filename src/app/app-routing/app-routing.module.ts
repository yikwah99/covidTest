import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestcentreComponent } from '../testcentre/testcentre.component';
import { ManageTestkitComponent } from '../manage-testkit/manage-testkit.component';
import { TestcentreRegisterComponent } from '../testcentre-register/testcentre-register.component';
import { UserRegisterComponent } from '../auth/user-register/user-register.component';
import { LoginComponent } from '../auth/login/login.component';
import { RecordTestComponent } from '../record-test/record-test.component';
import { UpdateTestComponent } from '../update-test/update-test.component';
import { ViewTestComponent } from '../view-test/view-test.component';
import { RecordOfficerComponent } from '../record-officer/record-officer.component';
import { GenerateReportComponent } from '../generate-report/generate-report.component';
import { HomepageComponent } from '../homepage/homepage.component';
import{ManageTestkitListComponent} from '../manage-testkit-list/manage-testkit-list.component'
export const routes: Routes = [
  { path: 'register',     component: UserRegisterComponent },
  { path: 'login',     component: LoginComponent },

  /*test manager*/
  {path: 'testcentre',  component: TestcentreComponent },
  { path: 'rCentre',  component: TestcentreRegisterComponent },
  { path: 'edit/:testcentreId',  component: TestcentreRegisterComponent },
  { path: 'manageTestKit',  component: ManageTestkitComponent },
  { path: 'edit/:testkitId',  component: ManageTestkitComponent },
  { path: 'testkitlist',  component:ManageTestkitListComponent},
  {path:'recordOfficer', component: RecordOfficerComponent},
  {path:'generateReport', component: GenerateReportComponent },
  /*tester/patient*/
  { path: 'recordTest',  component: RecordTestComponent },
  { path: 'updateTest',  component: UpdateTestComponent },
  { path: 'newTest/:username',  component: UpdateTestComponent },
  { path: 'viewTest',  component: ViewTestComponent },
  { path: 'homepage',  component: HomepageComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],

})
export class AppRoutingModule { }
