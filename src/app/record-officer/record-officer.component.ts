import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import{RecordOfficerService} from '../record-officer.service';
import { Testcentre } from '../testcentre.model';
import { TestcentreService } from '../testcentre.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-record-officer',
  templateUrl: './record-officer.component.html',
  styleUrls: ['./record-officer.component.css']
})
export class RecordOfficerComponent  {

  testcentres: Testcentre[] = [];
  private testcentreSub: Subscription;
  constructor(public recordofficerservice:RecordOfficerService,public testcentreService: TestcentreService) { }

  ngOnInit(): void {
    this.testcentreService.getTestCentres();
    this.testcentreSub = this.testcentreService.getTestcentreUpdateListerner()
      .subscribe((testcentres: Testcentre[]) => {
        this.testcentres = testcentres;
      });
  }
  onAddOfficer(form: NgForm){
    if(form.invalid){
      return;
    }else{
      console.log("Form Submitted!",form.value.centreName,form.value.username,form.value.password,form.value.fullname,form.value.position);

    }
    this.recordofficerservice.addOfficer(form.value.centreName,form.value.username,form.value.password,form.value.fullname,"Tester");
    form.resetForm();
  }


}
