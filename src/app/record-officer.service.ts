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

  getOfficer(id: string){
    return{...this.officers.find (t => t.id === id)};
  }

  updateOfficer(id: string, centreName:string, username:string,fullname: string, position:"Tester",password: string){
    const officer: Officer ={ id: id, centreName:centreName,username:username,fullname:fullname, position:position, password:password};
    this.http.put('http://localhost:3000/api/officers/'+id,officer)
    .subscribe(response =>console.log(response));
  }

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
  addOfficer( centreName:string, position: "Tester", fullname: string, username: string, password: string  ){
    const officer:Officer = {id:null, centreName:centreName, position:position,fullname:fullname,username:username, password:password};
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

  deleteOfficer(officerId: string){
    this.http.delete('http://localhost:3000/api/officers/'+ officerId)
    .subscribe(()=>{
     console.log('Deleted');
    const updatedOfficer = this.officers.filter(officer => officer.id !== officerId)
    this.officers = updatedOfficer,
    this.officerUpdated.next([...this.officers]);
    });
  }

}
