import {Officer} from './officer.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordOfficerService {

  constructor() { }
  private officers: Officer[] = [];

  getOfficer(){
    return this.officers;
  }
  addOfficer( username: string, password: string, fullname: string, position: "Tester"){
    const officer:Officer = {username:username, password:password, fullname:fullname, position:position};
    this.officers.push(officer);
  }
}
