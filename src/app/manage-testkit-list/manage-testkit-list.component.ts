import { Component, OnInit } from '@angular/core';
import{ManagetestkitService} from '../managetestkit.service';
import{Testkit} from '../testkit.model'
@Component({
  selector: 'app-manage-testkit-list',
  templateUrl: './manage-testkit-list.component.html',
  styleUrls: ['./manage-testkit-list.component.css']
})
export class ManageTestkitListComponent implements OnInit {
testkits: Testkit[] = [];
  constructor(public managetestkitservice: ManagetestkitService) { }

  ngOnInit(): void {
    this.testkits = this.managetestkitservice.getTestKit();
  }

}
