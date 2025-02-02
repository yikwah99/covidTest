import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {formatDate} from '@angular/common';
import {MatSort} from '@angular/material/sort';
import { ViewTestComponent } from '../view-test/view-test.component';
import { UpdateTestResultComponent } from '../update-test-result/update-test-result.component';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {RecordTestService} from '../record-test.service';
import {Test} from '../test.model';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PatientService} from '../record-patient.service';
//formatDate(new Date(), 'dd/MM/yyyy', 'en');

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})

export class GenerateReportComponent implements OnInit, OnDestroy {
  tests: Test[]=[];
  
  private testSub:Subscription;

  displayedColumns: string[] = ['testID', 'result', 'resultDate', 'status','testDate','username','action','delete'];
  
  dataSource = new MatTableDataSource(this.tests);
  
  constructor(public recordTestService: RecordTestService, public patientService: PatientService,private dialog:MatDialog) {

  }
  searchKey: string;
  ngOnInit(){
    this.recordTestService.getTests();
    this.testSub = this.recordTestService.getTestUpdateListener()
    .subscribe((tests: Test[])=>{
      this.tests = tests;
      this.dataSource.data = tests;
    })
    this.patientService.getPatients();
    //this.dataSource.data = this.tests;
    
  }
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  onViewReport(row){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {username: row.username};
    this.recordTestService.setID(row.id);
    this.recordTestService.setUsername(row.username);
    
    if (row.status === 'Completed'){
      console.log("view");
      this.dialog.open(ViewTestComponent,dialogConfig);
    }
    else{
      console.log("update");
      this.dialog.open(UpdateTestResultComponent,dialogConfig);
    }
    
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.maxHeight= '300vh';

  }
  onDeleteTest(id: string){
    this.recordTestService.deleteTest(id);
  }
  
  ngOnDestroy(){
    this.testSub.unsubscribe();
  }
}
