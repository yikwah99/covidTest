import {Testkit} from './testkit.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagetestkitService {

  constructor() { }
  private testkits: Testkit[] = [];

  getTestKit(){
    return this.testkits;
  }
  addTestkit( testkitName: string, stock: number){
    const testkit:Testkit = {testkitName:testkitName, stock:stock};
    this.testkits.push(testkit);
  }
}
