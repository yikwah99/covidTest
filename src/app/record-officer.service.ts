import {Officer} from './officer.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordOfficerService {

  constructor(private http: HttpClient) { }
  private officers: Officer[] = [];
  private officersUpdated = new Subject<Officer[]>();

  getOfficer(){
    this.http.get<{message: string, officers: any}>('http://localhost:3000/api/officers')
    .subscribe((officerData)=>{
      this.officers = officerData.officers;
      this.officersUpdated.next([...this.officers])

    })
    return this.officers;
  }

  getOfficerUpdateListener(){
    return this.officersUpdated.asObservable();
  }
  addOfficer( username: string, password: string, fullname: string, position: "Tester"){
    const officer:Officer = {id:null, username:username, password:password, fullname:fullname, position:position};
    this.officers.push(officer);
    this.officersUpdated.next([...this.officers]);
  }
}
