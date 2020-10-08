import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';

import { MatTableDataSource } from '@angular/material/table';
export interface TestReport {
  testID: string;
  result: string;
  resultDate: Date;
  status: string;
  tester: string;
}

const ELEMENT_DATA: TestReport[] = [
  {testID: 'TA001', result: 'Positive',  resultDate: new Date(2020, 8, 1), status: 'Completed',tester:"Abu"},
  {testID: 'TA002', result: 'Positive',  resultDate: new Date(2020, 9, 1), status: 'Completed',tester:"Marcus"},
  {testID: 'TA003', result: 'Negative',  resultDate: new Date(2020, 10, 1), status: 'Completed',tester:"Jack"},
  {testID: 'TA004', result: 'Positive',  resultDate: new Date(2020, 11, 1), status: 'Completed',tester:"Mia"},



];
//formatDate(new Date(), 'dd/MM/yyyy', 'en');
@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})

export class GenerateReportComponent implements OnInit {

  displayedColumns: string[] = ['testID', 'result', 'resultDate', 'status','tester'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
