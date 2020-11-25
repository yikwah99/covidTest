import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{RecordOfficerService} from '../record-officer.service';
import { Testcentre } from '../testcentre.model';
import { TestcentreService } from '../testcentre.service';
import { Subscription } from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';
import { Officer } from '../officer.model';

@Component({
  selector: 'app-record-officer',
  templateUrl: './record-officer.component.html',
  styleUrls: ['./record-officer.component.css']
})
export class RecordOfficerComponent implements OnInit {
  officer: Officer;

  testcentres: Testcentre[] = [];
  private mode ="recordOfficer";
  private officerId: string;


  private testcentreSub: Subscription;
  constructor(public recordofficerservice:RecordOfficerService,public testcentreService: TestcentreService, public route: ActivatedRoute,  private router:Router) { }

  ngOnInit(): void {
    this.testcentreService.getTestCentres();
    this.testcentreSub = this.testcentreService.getTestcentreUpdateListerner()
      .subscribe((testcentres: Testcentre[]) => {
        this.testcentres = testcentres;
      });


    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      if(paramMap.has('officerId')){
      this.mode ="editOff";
      this.officerId= paramMap.get('officerId');
      this.officer = this.recordofficerservice.getOfficer(this.officerId);

      }else{
        this.mode ='recordOfficer';
        this.officerId = null;
      }
    });
  }





  onAddOfficer(form: NgForm){
  //   if(form.invalid){
  //     return;
  //   }else{
  //     console.log("Form Submitted!",form.value.centreName,form.value.username,form.value.password,form.value.fullname,form.value.position);

  //   }
  //   this.recordofficerservice.addOfficer(form.value.centreName,form.value.username,form.value.password,form.value.fullname,"Tester");
  //   form.resetForm();
  // }
  if(form.invalid){
    return;
  }

  if(this.mode === 'recordOfficer'){
    this.recordofficerservice.addOfficer(form.value.centreName,"Tester",form.value.fullname,form.value.username,form.value.password);
  }else{
    this.recordofficerservice.updateOfficer(this.officerId, form.value.centreName,"Tester",form.value.fullname,form.value.username,form.value.password);
    this.router.navigate(['/recordOfficer']);
  }
  form.resetForm();
  }
}
