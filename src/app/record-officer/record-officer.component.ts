import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import{RecordOfficerService} from '../record-officer.service';
@Component({
  selector: 'app-record-officer',
  templateUrl: './record-officer.component.html',
  styleUrls: ['./record-officer.component.css']
})
export class RecordOfficerComponent  {

  constructor(public recordofficerservice:RecordOfficerService) { }

  ngOnInit(): void {
  }
  onAddOfficer(form: NgForm){
    if(form.invalid){
      return;
    }else{
      console.log("Form Submitted!",form.value.username,form.value.password,form.value.fullname,form.value.position);

    }
    this.recordofficerservice.addOfficer(form.value.username,form.value.password,form.value.fullname,"Tester");
    form.resetForm();
  }


}
