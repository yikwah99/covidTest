import {Testkit} from './testkit.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ManagetestkitService {
  private testkits: Testkit[] = [];
  private testkitUpdated = new Subject <Testkit[]>();
  constructor(private http: HttpClient, private rounter: Router){}

  getTest(id: string){
    return{...this.testkits.find (t => t.id === id)};
  }

  updateTestkit(id: string, testkitName: string, stock: number){
    const testkit: Testkit ={
      id: id,
      testkitName: testkitName,
      stock:stock
    }
    this.http.put('http://localhost:3000/api/testkits/' + id, testkit)
    .subscribe(response => console.log(response));
  }

  getTestKit(){
   // return this.testkits;
   this.http.get<{message: string, testkits: any}>('http://localhost:3000/api/testkits')
   .pipe(map((testkitData)=>{
     return testkitData.testkits.map(testkit => {
       return {
         testkitName: testkit.testkitName,
         stock: testkit.stock,
         id: testkit._id
       };
     });
   }))
   .subscribe(transformedTestkits => {
     //this.testkits= testkitData.testkits;
     //this.testkitUpdated.next([...this.testkits]);
     this.testkits = transformedTestkits;
     this.testkitUpdated.next([...this.testkits]);
   })
  }

  getTestUpdateListerner(){
    return this.testkitUpdated.asObservable();
  }
  // addTestkit( testkitName: string, stock: number){
  //   const testkit:Testkit = {testkitName:testkitName, stock:stock};
  //   this.testkits.push(testkit);
  // }
   addTestkit( testkitName: string, stock: number){
     const testkit: Testkit = {id: null, testkitName:testkitName, stock:stock};
     this.http
     .post<{message: string, testkitId: string}>('http://localhost:3000/api/testkits',testkit)
     .subscribe((responseData)=>{
     const id = responseData.testkitId;
      testkit.id = id;
      //console.log(responseData.message);
      this.testkits.push(testkit);
      this.testkitUpdated.next([...this.testkits]);
      //this.rounter.navigate(['/']);
     });
   }

   deleteTestkit(testkitId: string){
     this.http.delete('http://localhost:3000/api/testkits/'+ testkitId)
     .subscribe(()=>{
      console.log('Deleted');
     const updatedTestkits = this.testkits.filter(testkit => testkit.id !== testkitId)
     this.testkits = updatedTestkits,
     this.testkitUpdated.next([...this.testkits]);
     });
   }
}
