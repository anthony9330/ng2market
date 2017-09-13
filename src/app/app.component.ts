import { Component,TemplateRef ,OnInit } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

constructor(private authService:AuthService){

}

  ngOnInit(){
      console.log("app comonent initialized");
      this.authService.openModal.subscribe(
        respo=>{console.log("from appcomonent "+respo);})

  }

  //   public modalRef: BsModalRef;
  // constructor(private modalService: BsModalService) {}

  // public openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }



}
