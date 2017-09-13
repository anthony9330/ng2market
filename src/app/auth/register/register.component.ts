import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { NgForm} from '@angular/forms';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 constructor(public bsModalRef: BsModalRef,
            private authService:AuthService) { }

 onSubmit(form:NgForm){
     console.log(form);
    var email=form.value.email;
    var name=form.value.name;
    var password=form.value.password;
    var phone=form.value.phone;
    var location=form.value.location;
     this.authService.signup(email,name,password,phone,location).subscribe(
        response=>console.log(response),
        error=>console.log(error)
       )

 }

 checkSubscribe(){
   this.authService.openModal.next('from register');

 }

  ngOnInit() {
    console.log("register init");
  }

}
