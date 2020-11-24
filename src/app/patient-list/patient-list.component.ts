import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import {Patient} from '../patient.model';
import { MatTableDataSource } from '@angular/material/table';
import {PatientService} from '../record-patient.service';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { UpdateTestComponent } from '../update-test/update-test.component';
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit, OnDestroy {
  patients: Patient[]=[];
  dataSource: MatTableDataSource<Patient>;
  displayedColumns: string[] =[    'username','password','fullName','idNo','sex','age','birthday','phoneNo','address','zip','city','country','state','action'];
  private patientSub:Subscription;

  constructor(public patientService: PatientService, private dialog:MatDialog) { }

  ngOnInit(){
    this.patientService.getPatients();
    this.patientSub = this.patientService.getPatientsUpdateListener()
    .subscribe((patients:Patient[])=>{
      this.patients =patients;
    });
    
  }
  ngOnDestroy(){
    this.patientSub.unsubscribe();
  }
  
  onViewPatient(){
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(UpdateTestComponent,dialogConfig);
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.maxHeight= '300vh';
  }

}
