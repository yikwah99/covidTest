import { Component, Input,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
//import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TestcentreRegisterComponent } from '../testcentre-register/testcentre-register.component';
import {Testcentre} from '../testcentre.model';
import {TestcentreService} from '../testcentre.service';

@Component({
  selector: 'app-testcentre',
  templateUrl: './testcentre.component.html',
  styleUrls: ['./testcentre.component.css']
})
export class TestcentreComponent implements OnInit {

  name: Testcentre[] = [];

  constructor(public testcentreService: TestcentreService) { }

  ngOnInit() {
    this.name = this.testcentreService.getTestCentres();
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
