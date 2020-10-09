import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-testcentre-register',
  templateUrl: './testcentre-register.component.html',
  styleUrls: ['./testcentre-register.component.css']
})
export class TestcentreRegisterComponent implements OnInit {
  @Input() enteredCentre;
 @Output() addCentre= new EventEmitter();

  constructor() { }
  display = false;

  ngOnInit(): void {
  }

  onAddCentre(){
     this.enteredCentre;
    this.addCentre.emit( this.enteredCentre);
    console.log( this.enteredCentre);

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

  onDisplay() {
    //this.display = true;

    //To toggle the component
    this.display = !this.display;
  }
}
