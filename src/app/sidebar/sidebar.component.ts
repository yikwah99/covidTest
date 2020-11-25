import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import{AuthService} from '../auth/auth.services';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  constructor(private authService: AuthService){}


  ngOnInit(): void {
    this.authListenerSubs =this.authService
    .getAuthStatusListener()
    .subscribe(isAuthenticated=> {
      this.userIsAuthenticated = isAuthenticated;
    })
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
