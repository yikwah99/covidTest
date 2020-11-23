import { Component, OnInit } from '@angular/core';
import {PatientService} from '../record-patient.service';
import {Patient} from "../patient.model";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-record-test',
  templateUrl: './record-test.component.html',
  styleUrls: ['./record-test.component.css']
})


export class RecordTestComponent implements OnInit {
  patients: Patient[]=[];
  constructor(private patientService: PatientService) {
  }

  ngOnInit(): void {
  }

  onAddPatienttoCollection(form: NgForm){
    if(form.invalid){
      return;
    }
    else{
      this.patientService.addPatient(form.value.username, form.value.password, form.value.fullName, form.value.idNo, form.value.sex, form.value.age, form.value.birthday, form.value.phoneNo, form.value.address, form.value.zip, form.value.city, form.value.country, form.value.state);      
      //form.resetForm();


    }
    
  }


}
