import { Component, OnInit,Injectable } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgForm} from '@angular/forms';
import {AuthService} from "../auth.service";
import { ActivatedRoute, Params, Router, Data } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','.././auth-header/auth-header.component.css']
})
export class LoginComponent implements OnInit {
bsModalRef: BsModalRef;
login_text:string;
toggleLogin:string;




  constructor(public modalService: BsModalService,
    private authService:AuthService,
    private router:Router) {
   
     }


  ngOnInit() {
    console.log("login init");
   this.authService.openModal.subscribe(
   (modal:BsModalRef)=>{
         this.bsModalRef=modal;
      
       }
     );   
  }

    onSubmit(form:NgForm){
        var email=form.value.email;
        var password=form.value.password;
          this.authService.signin(email,password).subscribe(
                response=>{
                  console.log('from login component:');
                 if(response.token!=null){
                     this.router.navigate(['/userpage']);
                     this.bsModalRef.hide();  

                   

                 }

                },

                (error)=>{
                    this.login_text=error.json().error;
                    this.toggleLogin='fail';
                 console.log(error) ;
                }
            )
    }

    // openModal(){
    //      this.bsModalRef = this.modalService.show(LoginComponent);
    // }





}
