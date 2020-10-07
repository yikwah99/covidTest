import { Component, OnInit } from '@angular/core';
import {Patient} from '../patient.model';
import { MatTableDataSource } from '@angular/material/table';
import {PatientService} from '../record-patient.service'


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  displayedColumns: string[] =[    'username','password','fullName','idNo','sex','age','birthday','phoneNo','address','zip','city','country','state'];
  patients: Patient[]=[];
  dataSource: MatTableDataSource<Patient>;
  
  
  
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patients = this.patientService.getPatients();
  }

}
