import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService:UsersService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
      // console.log(form);
      this.userService.submitProduct(form);
  }

}
