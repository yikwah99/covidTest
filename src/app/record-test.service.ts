import {Test} from './test.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class RecordTestService {
  private tests: Test[]=[];
  private testsUpdated = new Subject <Test[]>();
  
  constructor(private http:HttpClient){}
  
  addTest(username: string,testDate: string,status: string,result: string,resultDate: string){
    const test: Test = {username:username,testDate:testDate,status:status,result:result,resultDate:resultDate};
    console.log(test);
    this.http
     .post<{message: string}>('http://localhost:3000/api/tests',test)
     .subscribe((responseData)=>{
      console.log(responseData.message);
      this.tests.push(test);
      this.testsUpdated.next([...this.tests]);
     });
  }
}
