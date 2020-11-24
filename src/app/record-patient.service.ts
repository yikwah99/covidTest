import {Patient} from "./patient.model";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class PatientService{
  private patients: Patient[]=[];
  private patientsUpdated = new Subject <Patient[]>();
  
  constructor(private http:HttpClient){}
 /*
  getPatients(){
    this.http.get<{message: string, patients: any}>('http:/localhost:3000/api/patients').subscribe((patientData)=>{
      this.patients = patientData.patients;
      this.patientsUpdated.next([...this.patients]);
    })
  }
   */
  getPatients(){
   // return this.testkits;
   this.http.get<{message: string, patients: any}>('http://localhost:3000/api/patients')
    .pipe(map((patientData)=>{
     return patientData.patients.map(patient =>{
       return {
         username:patient.username, 
         password:patient.password, 
         fullName:patient.fullName, 
         idNo:patient.idNo, 
         sex:patient.sex, 
         age:patient.age, 
         birthday:patient.birthday, 
         phoneNo:patient.phoneNo, 
         address:patient.address, 
         zip:patient.zip, 
         city:patient.city, 
         country:patient.country, 
         state:patient.state 
       };
     });
   }))
   .subscribe(transformedPatients => {
     this.patients = transformedPatients;
     this.patientsUpdated.next([...this.patients]);
   })
  }
  
  
  getPatientsUpdateListener(){
    return this.patientsUpdated.asObservable();
  }
  
  addPatient(username: string, password: string, fullName: string, idNo: string, sex: string, age: number, birthday: string, phoneNo: string, address: string, zip: string, city: string, country: string, state: string){
    
    const patient: Patient = {username:username, password:password, fullName:fullName, idNo:idNo, sex:sex, age:age, birthday:birthday, phoneNo:phoneNo, address:address, zip:zip, city:city, country:country, state:state};
    this.http
     .post<{message: string}>('http://localhost:3000/api/patients',patient)
     .subscribe((responseData)=>{
      console.log(responseData.message);
      this.patients.push(patient);
      this.patientsUpdated.next([...this.patients]);
     });
    
  }
  
  getPatient(username: string){
    return{...this.patients.find(t => t.username===username)};
  }
  
  getCollection(){
    return this.patients;
  }
  
  addToCollection(item:Patient){
    //if (this.collection.indexOf(item) !==-1){
    //  return
    // }
    this.patients.push(item);
  }
  
  removeFromCollection(item:Patient){
    this.patients.splice(this.patients.indexOf(item), 1);
  }
}