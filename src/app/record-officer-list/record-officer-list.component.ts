import { Component, OnInit } from '@angular/core';
import {Officer} from '../officer.model';
import{RecordOfficerService} from '../record-officer.service';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Testcentre } from '../testcentre.model';
import { TestcentreService } from '../testcentre.service';

@Component({
  selector: 'app-record-officer-list',
  templateUrl: './record-officer-list.component.html',
  styleUrls: ['./record-officer-list.component.css']
})
export class RecordOfficerListComponent implements OnInit {
  displayedColumns: string[] = ['userID','testcentre','position', 'username', 'password', 'fullname','action'];
  officers: Officer[] = [];
  private officerSub:Subscription;
  dataSource = new MatTableDataSource(this.officers);

  //dataSource = this.officers;
  //dataSource = ELEMENT_DATA;
  constructor(public recordofficerservice: RecordOfficerService,public testcentreService: TestcentreService) {
    //this.dataSource = new MatTableDataSource(this.officers);
  }


  ngOnInit(){
   // this.officers = this.recordofficerservice.getOfficer();
  //this.recordofficerservice.getOfficers()
  this.testcentreService.getTestCentres();
  this.recordofficerservice.getOfficers();
  this.officerSub = this.recordofficerservice.getOfficerUpdateListener()
  .subscribe(( officers: Officer[])=>{
    this. officers=  officers;
  })

  }

}
