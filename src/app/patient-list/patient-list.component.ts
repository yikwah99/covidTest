import { AfterViewInit, Component, OnInit } from '@angular/core';
import {Patient} from '../patient.model';
import { MatTableDataSource } from '@angular/material/table';
import {PatientService} from '../record-patient.service';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateTestComponent } from '../update-test/update-test.component';
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  displayedColumns: string[] =[    'username','password','fullName','idNo','sex','age','birthday','phoneNo','address','zip','city','country','state','action'];
  patients: Patient[]=[];
  dataSource: MatTableDataSource<Patient>;

  constructor(private patientService: PatientService, private dialog:MatDialog) { }

  ngOnInit(): void {
    //this.patients = this.patientService.getPatients()
    this.patients = this.patientService.getPatients();
    
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
