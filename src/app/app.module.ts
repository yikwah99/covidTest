import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing/app-routing.module';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip'
/*import {RouterModule, Routes} from '@angular/router';*/

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { UserRegisterComponent } from './user-register/user-register.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { TestcentreComponent } from './testcentre/testcentre.component';
import { TestcentreRegisterComponent } from './testcentre-register/testcentre-register.component';
import { ManageTestkitComponent } from './manage-testkit/manage-testkit.component';
import { RecordOfficerComponent } from './record-officer/record-officer.component';
import{ManageTestkitListComponent} from './manage-testkit-list/manage-testkit-list.component'
import{RecordOfficerListComponent} from './record-officer-list/record-officer-list.component'
import { GenerateReportComponent } from './generate-report/generate-report.component';

import { RecordTestComponent } from './record-test/record-test.component';
import { UpdateTestComponent } from './update-test/update-test.component';
import { ViewTestComponent } from './view-test/view-test.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientService } from './record-patient.service';
import { UpdateTestResultComponent } from './update-test-result/update-test-result.component'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserRegisterComponent,
    LoginComponent,
    SidebarComponent,
    TestcentreRegisterComponent,
    ManageTestkitComponent,
    RecordOfficerComponent,
    RecordTestComponent,
    UpdateTestComponent,
    ViewTestComponent,
    HomepageComponent,
    TestcentreComponent,
    ManageTestkitListComponent,
    RecordOfficerListComponent,
    PatientListComponent,
    GenerateReportComponent,
    UpdateTestResultComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,

    MatFormFieldModule,
    MatButtonToggleModule,
    MatTreeModule,
    MatBadgeModule,
    MatGridListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatTooltipModule,


  ],
  providers: [PatientService],
  bootstrap: [AppComponent],
  entryComponents:[ViewTestComponent]
})
export class AppModule { }
