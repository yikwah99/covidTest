import {Testkit} from './testkit.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ManagetestkitService {


  private testkits: Testkit[] = [];
  private testkitUpdated = new Subject <Testkit[]>();
  constructor(private http: HttpClient, private rounter: Router){}

  getTestKit(){
   // return this.testkits;
   this.http.get<{message: string, testkits: any}>('http://localhost:3000/api/posts')
   .pipe(map((testkitData)=>{
     return testkitData.testkits.map(post => {
       return {
         testkitName: post.title,
         stock: post.content,
         id: post._id
       };
     });
   }))
   .subscribe(transformedPosts => {
     this.testkits = transformedPosts;
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
     const testkit:Testkit = {id:null,testkitName:testkitName, stock:stock};
     this.testkits.push(testkit);
     this.testkitUpdated.next([...this.testkits]);
   }
}
