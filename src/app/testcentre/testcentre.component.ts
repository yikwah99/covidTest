import { Component, Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-testcentre',
  templateUrl: './testcentre.component.html',
  styleUrls: ['./testcentre.component.css']
})
export class TestcentreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breakpoint: number;

 name = [];
  /*public str:any;

  onAddCentre(){
    this.name = this.str;
  }*/


}
