import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {LoginComponent} from "../../auth/login/login.component";
import {RegisterComponent} from "../../auth/register/register.component";
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import {AuthService} from "../../auth/auth.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
bsModalRef: BsModalRef;
  constructor(private  modalService: BsModalService,
    private route:ActivatedRoute,
    private router:Router,
    private authServcie:AuthService
    ) { }

    loggedIn=this.authServcie.isAuthenticated();

    openLogin() {

      console.log("login click"); 
         // this.router.navigate(['login']);
         // this.authServcie.modalTag("modal login");
       
         this.bsModalRef = this.modalService.show(LoginComponent);
         this.authServcie.emitModalTag(this.bsModalRef);

      }


      onProductsClick(){
          this.router.navigate(['products'],{relativeTo:this.route});
      }


        openRegister(){

           this.bsModalRef = this.modalService.show(RegisterComponent);
           this.authServcie.emitModalTag(this.bsModalRef);
          // this.router.navigate(['register'])

        }

        accountPage(){

          console.log("accountpage called");

          if(this.authServcie.isAdmin(localStorage.getItem('token'))){

            console.log("inside of service from accoutn page func");
            this.router.navigate(['adminpage']);
          }
          else {
            console.log("inside of service from accoutn page func to user page");
            this.router.navigate(['userpage']);
          }
        

        }
              




  ngOnInit() {
     console.log("header init");
  }

}
