import { Component, OnInit, OnDestroy } from '@angular/core';
import {Patient} from '../patient.model';
import { MatTableDataSource } from '@angular/material/table';
import {PatientService} from '../record-patient.service';
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

  constructor(public patientService: PatientService) { }

  ngOnInit(){
    this.patientService.getPatients();
    this.patientSub = this.patientService.getPatientsUpdateListener()
    .subscribe((patients:Patient[])=>{
      this.patients =patients;
    });
    console.log(this.patients);
    
  }
  ngOnDestroy(){
    this.patientSub.unsubscribe();
  }
  

}
