import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {LoaderService} from "../../shared/loader.service";

import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-users-header',
  templateUrl: './users-header.component.html',
  styleUrls: ['./users-header.component.css']
})
export class UsersHeaderComponent implements OnInit {

  constructor(private authService:AuthService,
    private router:Router,
    private loaderService:LoaderService) { }

  loggedIn=this.authService.isAuthenticated();
  isAdmin=this.authService.isAdmin(localStorage.getItem("token"));

  ngOnInit() {
  }

  LogOut(){
    this.loaderService.show();
    this.authService.logOut();
    this.router.navigate(['main']);
  }

  toMain(){
    this.loaderService.show();
    this.router.navigate(['main']);
  }


}
