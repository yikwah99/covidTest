import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import{ManagetestkitService} from '../managetestkit.service';
import{Testkit} from '../testkit.model'
@Component({
  selector: 'app-manage-testkit-list',
  templateUrl: './manage-testkit-list.component.html',
  styleUrls: ['./manage-testkit-list.component.css']
})
export class ManageTestkitListComponent implements OnInit {
testkits: Testkit[] = [];

private testkitSub:Subscription;

constructor(public managetestkitservice: ManagetestkitService) { }

  ngOnInit(): void {
    this.managetestkitservice.getTestKit();
    this.testkitSub = this.managetestkitservice.getTestUpdateListerner()
    .subscribe((testkits: Testkit[])=>{
      this.testkits = testkits;
    })
   // this.testkits = this.managetestkitservice.getTestKit();
  }
  onDelete(testkitId: string){
    //this.managetestkitservice.deleteTestKit(testkitId);
  }

  ngDestroy(){
    this.testkitSub.unsubscribe();
  }

}
