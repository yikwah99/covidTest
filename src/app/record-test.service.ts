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
    const test: Test = {id: null, username:username,testDate:testDate,status:status,result:result,resultDate:resultDate};
    this.http
     .post<{message: string, testID: string}>('http://localhost:3000/api/tests',test)
     .subscribe((responseData)=>{
      const id = responseData.testID;
      test.id = id;
      this.tests.push(test);
      this.testsUpdated.next([...this.tests]);
     });
  }
  
  getTests(){
    this.http.get<{message: string, tests: any}>('http://localhost:3000/api/tests')
   .pipe(map((testData)=>{
     return testData.tests.map(test => {
       return {
         username: test.username,
         testDate: test.testDate,
         status: test.status,
         result: test.result,
         resultDate: test.resultDate,
         id: test._id
       };
     });
   }))
   .subscribe(transformedTests => {
     this.tests = transformedTests;
     this.testsUpdated.next([...this.tests]);
   })
  }
  
  getTestUpdateListener(){
    return this.testsUpdated.asObservable();
  }
}
