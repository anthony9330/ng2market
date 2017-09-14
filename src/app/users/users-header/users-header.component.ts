import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';


@Component({
  selector: 'app-users-header',
  templateUrl: './users-header.component.html',
  styleUrls: ['./users-header.component.css']
})
export class UsersHeaderComponent implements OnInit {

  constructor(private authService:AuthService) { }

  loggedIn=this.authService.isAuthenticated();

  ngOnInit() {
  }

  LogOut(){
    this.authService.logOut();
  }

}
