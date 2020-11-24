import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {TestcentreService} from '../testcentre.service';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Testcentre} from '../testcentre.model';

@Component({
  selector: 'app-testcentre-register',
  templateUrl: './testcentre-register.component.html',
  styleUrls: ['./testcentre-register.component.css']
})
export class TestcentreRegisterComponent implements OnInit {
//   @Input() enteredCentre;
//  @Output() addCentre= new EventEmitter();

constructor(public testcentreService: TestcentreService) { }
  display = false;

  ngOnInit(): void {
  }
  // onAddCentre(){
  //    this.enteredCentre;
  //   this.addCentre.emit( this.enteredCentre);
  //   console.log( this.enteredCentre);

  //   this.display = !this.display;

  // }
  onAddTestcentre(form: NgForm){
    if (form.invalid) {
      return;
    }
    this.testcentreService.addTestCentre(form.value.centreName);

    form.resetForm();
  }
  // onDisplay() {
  //   this.display = !this.display;
  // }
}
