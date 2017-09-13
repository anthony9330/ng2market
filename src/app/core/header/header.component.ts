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
    private authServcie:AuthService) { }

    openLoginModal() {

console.log("login click");
      this.authServcie.openModal.next("login subject");
      // this.router.navigate(['login']);
        // this.bsModalRef = this.modalService.show(LoginComponent);

      }


      onProductsClick(){
          this.router.navigate(['products'],{relativeTo:this.route});
      }

      openRegisterModal(){
          this.authServcie.openModal.next("register subject");
        // this.bsModalRef=this.modalService.show(RegisterComponent);

      }




  ngOnInit() {
     console.log("header init");
  }

}
