import {Officer} from './officer.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RecordOfficerService {

  constructor(private http: HttpClient) { }
  private officers: Officer[] = [];
  private officerUpdated = new Subject<Officer[]>();

  getOfficers(){
    this.http.get<{message: string, officers: any}>('http://localhost:3000/api/officers')
   .pipe(map((officerData)=>{
     return officerData.officers.map(officer=> {
       return {
         centreName: officer.centreName,
         position:officer.position,
         fullname: officer.fullname,
         password: officer.password,
         username: officer.username,
         id: officer._id
       };
     });
   }))
   .subscribe(transformedOfficer => {
     this.officers = transformedOfficer ;
     this.officerUpdated.next([...this.officers]);
   })
  }

  getOfficerUpdateListener(){
    return this.officerUpdated.asObservable();
  }
  addOfficer( centreName:string, username: string, password: string, fullname: string, position: "Tester"){
    const officer:Officer = {id:null, centreName:centreName,username:username, password:password, fullname:fullname, position:position};
    this.http
      .post<{message: string, officerId: string}>('http://localhost:3000/api/officers', officer)
      .subscribe((responseData)=>{

      const id = responseData.officerId;
      officer.id = id;
      console.log(responseData.message);
      this.officers.push(officer);
      this.officerUpdated.next([...this.officers]);
      //this.rounter.navigate(['/']);
      });

  }

}
