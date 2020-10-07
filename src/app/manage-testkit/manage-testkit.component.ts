import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{ManagetestkitService} from '../managetestkit.service';

@Component({
  selector: 'app-manage-testkit',
  templateUrl: './manage-testkit.component.html',
  styleUrls: ['./manage-testkit.component.css']
})
export class ManageTestkitComponent implements OnInit {

  constructor(public managetestkitservice: ManagetestkitService) { }

  ngOnInit(): void {
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
