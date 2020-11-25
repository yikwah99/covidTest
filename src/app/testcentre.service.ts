import { Testcentre } from './testcentre.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TestcentreService {

  private testcentres: Testcentre[] = [];
  private centreUpdated = new Subject<Testcentre[]>();
  constructor(private http: HttpClient, private rounter: Router) { }

  getTc(id:string){
    return{...this.testcentres.find (t => t.id === id)};
  }

  getTestCentres() {
    //return this.testcentres;
    this.http.get<{ message: string, testcentres: any }>('http://localhost:3000/api/testcentres')
      .pipe(map((testcentresData) => {
        return testcentresData.testcentres.map(testcentre => {
          return {
            centreName: testcentre.centreName,
            id: testcentre._id
          };
        });
      }))
      .subscribe(transformedTestcentres => {
        this.testcentres = transformedTestcentres;
        this.centreUpdated.next([...this.testcentres]);
      })
  }

  updateTestCentre(id: string, centreName:string){
    const testcentre: Testcentre ={ id: id, centreName:centreName};
    this.http.put('http://localhost:3000/api/testcentres/'+id,testcentre)
    .subscribe(response =>console.log(response));
  }


  getTestcentreUpdateListerner() {
    return this.centreUpdated.asObservable();
  }

  addTestCentre(centreName: string) {
    //const testcentre: Testcentre ={centreName: centreName};
    //this.testcentres.push(testcentre);

    const testcentre: Testcentre = { id: null, centreName: centreName }; //variable storing values of post
    //user input from the form to post and pass and push to push array
    //this.posts.push(post);
    this.http
      .post<{ message: string, testcentreId: string }>('http://localhost:3000/api/testcentres', testcentre)
      .subscribe((responseData) => {
        const id = responseData.testcentreId;
        testcentre.id = id;
        //console.log(responseData.message);
        this.testcentres.push(testcentre);
        this.centreUpdated.next([...this.testcentres]);
        //this.rounter.navigate(['/']);
      });

  }


}
