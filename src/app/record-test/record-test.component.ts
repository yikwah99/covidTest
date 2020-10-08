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
    this.patients = this.patientService.getPatients();
  }

  onAddPatienttoCollection(form: NgForm){
    if(form.invalid){
      return;
    }
    else{
      console.log(form.value.username, form.value.password, form.value.fullName, form.value.idNo, form.value.sex, form.value.age, form.value.birthday, form.value.phoneNo, form.value.address, form.value.zip, form.value.city, form.value.country, form.value.state);
      var patient:Patient = {username: form.value.username, password: form.value.password, fullName: form.value.fullName, idNo: form.value.idNo, sex: form.value.sex, age: form.value.age, birthday: form.value.birthday, phoneNo: form.value.phoneNo, address: form.value.address, zip: form.value.zip, city: form.value.city, country: form.value.country, state: form.value.state};
      
      this.patientService.addToCollection(patient);
      
      form.resetForm();


    }
    
  }


}
