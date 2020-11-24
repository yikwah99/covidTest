import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TestcentreService } from '../testcentre.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Testcentre } from '../testcentre.model';

@Component({
  selector: 'app-testcentre-register',
  templateUrl: './testcentre-register.component.html',
  styleUrls: ['./testcentre-register.component.css']
})
export class TestcentreRegisterComponent implements OnInit {

  testcentre: Testcentre;
  private mode = "rCentre";
  display = false;
  private testcentreId: string;


constructor(public testcentreService: TestcentreService, public route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('testcentreId')) {
        this.mode = "edit";
        this.testcentreId = paramMap.get('testcentreId');
        this.testcentre = this.testcentreService.getTc(this.testcentreId);

      } else {
        this.mode = 'rCentre';
        this.testcentreId = null;
      }
    });
  }
  // onAddCentre(){
  //    this.enteredCentre;
  //   this.addCentre.emit( this.enteredCentre);
  //   console.log( this.enteredCentre);

  //   this.display = !this.display;

  // }
  onAddTestcentre(form: NgForm) {
    if (form.invalid) {
      return;
    }

    if (this.mode === 'rCentre') {
      this.testcentreService.addTestCentre(form.value.centreName);
    } else {
      this.testcentreService.updateTestCentre(this.testcentreId, form.value.centreName);
      this.router.navigate(['/rCentre']);
    }
    form.resetForm();
  }
  // onDisplay() {
  //   this.display = !this.display;
  // }
}
