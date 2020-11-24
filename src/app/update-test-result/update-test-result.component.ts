import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Patient} from '../patient.model';
import {Test} from '../test.model';
import {PatientService} from '../record-patient.service';
import {RecordTestService} from '../record-test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-test-result',
  templateUrl: './update-test-result.component.html',
  styleUrls: ['./update-test-result.component.css']
})
export class UpdateTestResultComponent implements OnInit {
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
  
  onUpdateTest(form: NgForm){
    if (form.invalid){
      return;
    }
    else{
      this.testService.updateTest(this.id,this.test.username,this.test.testDate,"Completed",form.value.result,form.value.resultDate,this.test.symptoms,this.test.patientType);
    this.router.navigate(['/generateReport']);
    }
  }
  
  

}
