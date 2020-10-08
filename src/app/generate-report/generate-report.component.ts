import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';
import {MatSort} from '@angular/material/sort';
import { ViewTestComponent } from '../view-test/view-test.component';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface TestReport {
  testID: string;
  result: string;
  resultDate: Date;
  status: string;
  tester: string;
  patientType: string;
}

const ELEMENT_DATA: TestReport[] = [
  {testID: 'TA001', result: 'Positive',  resultDate: new Date(2020, 8, 1), status: 'Completed',tester:"Abu", patientType:'Returnee'},
  {testID: 'TA002', result: 'Positive',  resultDate: new Date(2020, 9, 2), status: 'Completed',tester:"Marcus",patientType:'Returnee'},
  {testID: 'TA003', result: 'Negative',  resultDate: new Date(2020, 9, 3), status: 'Completed',tester:"Jack",patientType:'Returnee'},
  {testID: 'TA004', result: 'Positive',  resultDate: new Date(2020, 9, 4), status: 'Pending',tester:"Mia",patientType:'Returnee'},



];
//formatDate(new Date(), 'dd/MM/yyyy', 'en');
@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})

export class GenerateReportComponent implements OnInit {

  displayedColumns: string[] = ['testID', 'result', 'resultDate', 'status','tester','viewPatient'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(private dialog:MatDialog) {

  }
  searchKey: string;
  ngOnInit(): void {
  }
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  onViewReport(){
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(ViewTestComponent,dialogConfig);
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.maxHeight= '300vh';

  }
}
