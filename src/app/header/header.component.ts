import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import{AuthService} from '../auth/auth.services';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  constructor(private authService: AuthService){}

  ngOnInit(){
    this.authListenerSubs =this.authService
    .getAuthStatusListener()
    .subscribe(isAuthenticated=> {
      this.userIsAuthenticated = isAuthenticated;
    })
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  onLogout(){
    this.authService.logout();
  }
}
