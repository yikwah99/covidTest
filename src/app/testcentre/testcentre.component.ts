import { Component, Input,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TestcentreRegisterComponent } from '../testcentre-register/testcentre-register.component';
@Component({
  selector: 'app-testcentre',
  templateUrl: './testcentre.component.html',
  styleUrls: ['./testcentre.component.css']
})
export class TestcentreComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  breakpoint: number;

 name = [];
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
  onRegisterTestCentre (form: NgForm){
    if (form.invalid) {
      return;
    } else {
      console.log('Form Submitted!');
    }

    form.resetForm();
  }
  onRegisterForm(){
    const dialogConfig = new MatDialogConfig();

      this.dialog.open(TestcentreRegisterComponent,dialogConfig);



    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.maxHeight= '300vh';

  }

}
