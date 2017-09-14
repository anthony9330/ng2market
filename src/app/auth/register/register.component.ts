import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { NgForm} from '@angular/forms';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','.././auth-header/auth-header.component.css']
})
export class RegisterComponent implements OnInit {
register_text:string;
toggleStatus='';

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
        (response)=>{
         if(response.status==201 ){
           this.register_text= response.json().message;
           this.toggleStatus='success';
             console.log(response);
         }
        

        },
        (error)=>{
          this.register_text="Unable to register";
           this.toggleStatus='fail'; 
          console.log(error);
        }
       )

 }

 checkSubscribe(){
   this.authService.openModal.next('from register');

 }

  ngOnInit() {
    console.log("register init");

    this.authService.getModal().subscribe(
      (modal:BsModalRef)=>{
        this.bsModalRef=modal;
      })
  }

}
