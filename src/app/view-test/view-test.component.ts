import { Component, OnInit } from '@angular/core';
import {Patient} from '../patient.model';
import {Test} from '../test.model';
import {PatientService} from '../record-patient.service';
import {RecordTestService} from '../record-test.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
  tests: Test[]=[];
  
  private testSub:Subscription;
  
  constructor(
  public patientService: PatientService, 
   public testService: RecordTestService, 
   public router: Router) {
    
  }

  ngOnInit(){
    
    this.patientService.getPatients();
    this.testService.getTests();
    this.id = this.testService.getID();
    this.username = this.testService.getUsername();
    if (this.username==""){
      this.username = "patient";
      console.log(this.username);
    }
    if (this.id ==""){
      this.id="5fbd8e5a46e3510b2cd7eb3b";
    }
    this.patient = this.patientService.getPatient(this.username);
    console.log(this.patient);
    this.test = this.testService.getTest(this.id);
    console.log(this.test);
  }

}

