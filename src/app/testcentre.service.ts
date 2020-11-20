import{Testcentre} from './testcentre.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TestcentreService {

  private testcentres: Testcentre[] = [];

  getTestCentres(){
    return this.testcentres;
  }

  addTestCentre(centreName: string){
    const testcentre: Testcentre ={centreName: centreName};
    this.testcentres.push(testcentre);
  }
  constructor() { }
}
