import { Component, OnInit } from '@angular/core';
import {Officer} from '../officer.model';
import{RecordOfficerService} from '../record-officer.service';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  username: string;
  position: string;
  password: string;
  fullname: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: "Tester", username: 'tester001', password: 'abc122', fullname: 'Marcus John'},
  {position: "Tester", username: 'tester002', password: 'anc111', fullname: 'Curtis Foo'},

];
@Component({
  selector: 'app-record-officer-list',
  templateUrl: './record-officer-list.component.html',
  styleUrls: ['./record-officer-list.component.css']
})
export class RecordOfficerListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'username', 'password', 'fullname','action'];
  officers: Officer[] = [];
  dataSource: MatTableDataSource<Officer>;
  //dataSource = this.officers;
  //dataSource = ELEMENT_DATA;
  constructor(public recordofficerservice: RecordOfficerService) {
    //this.dataSource = new MatTableDataSource(this.officers);
  }


  ngOnInit(): void {
    this.officers = this.recordofficerservice.getOfficer();
   // this.dataSource = this.recordofficerservice.getOfficer();
  }

}
