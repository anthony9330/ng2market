import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';

import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-users-header',
  templateUrl: './users-header.component.html',
  styleUrls: ['./users-header.component.css']
})
export class UsersHeaderComponent implements OnInit {

  constructor(private authService:AuthService,
    private router:Router) { }

  loggedIn=this.authService.isAuthenticated();

  ngOnInit() {
  }

  LogOut(){
    this.authService.logOut();
    this.router.navigate(['main']);
  }

}
