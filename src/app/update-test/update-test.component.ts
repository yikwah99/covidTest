import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Patient} from '../patient.model';
import {PatientService} from '../record-patient.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {RecordTestService} from '../record-test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-test',
  templateUrl: './update-test.component.html',
  styleUrls: ['./update-test.component.css']
})

export class UpdateTestComponent implements OnInit{
  patient: Patient;
  private username: string;
  
  constructor(public patientService: PatientService, public testService: RecordTestService, public route:ActivatedRoute, public router: Router) { }

  ngOnInit(){
    this.patientService.getPatients();
    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      if(paramMap.has('username')){
        this.username= paramMap.get('username');
        this.patient = this.patientService.getPatient(this.username);
      }
    });
    console.log(this.patient);
  }
  
  onAddNewTest(form: NgForm){
    if(form.invalid){
      return;
    }
    else{
      this.testService.addTest(this.username,form.value.testDate,"Pending","-","-",form.value.symptoms,form.value.patientType);
      this.router.navigate(['/recordTest']);
      
    }
  }
  

}
