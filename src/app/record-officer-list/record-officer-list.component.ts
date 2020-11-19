import { Component, OnInit } from '@angular/core';
import {Officer} from '../officer.model';
import{RecordOfficerService} from '../record-officer.service';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

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
   // this.officers = this.recordofficerservice.getOfficer();
  this.recordofficerservice.getOfficer()

  }

}
