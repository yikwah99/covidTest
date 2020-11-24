import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{ManagetestkitService} from '../managetestkit.service';
import {Testkit} from '../testkit.model';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-manage-testkit',
  templateUrl: './manage-testkit.component.html',
  styleUrls: ['./manage-testkit.component.css']
})
export class ManageTestkitComponent implements OnInit {

  testkit: Testkit;
  private mode ="manageTestKit";
  private testkitId: string;

  constructor(public managetestkitservice: ManagetestkitService, public route: ActivatedRoute) { }

  ngOnInit(){
    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      if(paramMap.has('testkitId')){
      this.mode ="edit";
      this.testkitId= paramMap.get('testkitId');
      this.testkit = this.managetestkitservice.getTest(this.testkitId);

      }else{
        this.mode ='manageTestKit';
        this.testkitId = null;
      }
    });
  }

  onUpdateTest(form: NgForm){
    if(form.invalid){
      return;

    }

    if(this.mode === 'manageTestKit'){
      this.managetestkitservice.addTestkit(form.value.testkitName, form.value.stock);
    }else{
      this.managetestkitservice.updateTestkit(this.testkitId, form.value.title, form.value.stock);
    }
    form.resetForm();
  }

  onAddTestkit(form: NgForm){
    if(form.invalid){
      return;
    }else{
      console.log("Form Submitted!",form.value.testkitName,form.value.stock);

    }
    this.managetestkitservice.addTestkit(form.value.testkitName,form.value.stock);
    form.resetForm();
  }

}
