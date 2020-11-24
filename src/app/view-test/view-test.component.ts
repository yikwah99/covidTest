import { Component, OnInit } from '@angular/core';
import {Patient} from '../patient.model';
import {Test} from '../test.model';
import {PatientService} from '../record-patient.service';
import {RecordTestService} from '../record-test.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-test',
  templateUrl: './view-test.component.html',
  styleUrls: ['./view-test.component.css']
})
export class ViewTestComponent implements OnInit {
  patient: Patient;
  username: string;
  id: string;
  test: Test;
  
  
  constructor(
  public patientService: PatientService, 
   public testService: RecordTestService, 
   public router: Router) {
    
  }

  ngOnInit(){
    this.id = this.testService.getID();
    this.username = this.testService.getUsername();
    this.patient = this.patientService.getPatient(this.username);
    this.test = this.testService.getTest(this.id);
    
  }

}
