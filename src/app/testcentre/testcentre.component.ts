import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TestcentreRegisterComponent } from '../testcentre-register/testcentre-register.component';
import { Testcentre } from '../testcentre.model';
import { TestcentreService } from '../testcentre.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-testcentre',
  templateUrl: './testcentre.component.html',
  styleUrls: ['./testcentre.component.css'],
})
export class TestcentreComponent implements OnInit {
  testcentres: Testcentre[] = [];
  private testcentreSub: Subscription;

  constructor(public testcentreService: TestcentreService) {}

  ngOnInit() {
    this.testcentreService.getTestCentres();
    this.testcentreSub = this.testcentreService.getTestcentreUpdateListerner()
      .subscribe((testcentres: Testcentre[]) => {
        this.testcentres = testcentres;
      });
  }
  //breakpoint: number;
  /*public str:any;

  onAddCentre(){
    this.name = this.str;
  }*/
  display = false;
  onDisplay() {
    //this.display = true;

    //To toggle the component
    this.display = !this.display;
  }
}
