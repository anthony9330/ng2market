import { Component, OnInit } from '@angular/core';
import {LoaderService} from "../../shared/loader.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor( private loader:LoaderService) { }

  ngOnInit() {
    console.log("admin comp oninit");
    this.loader.show();
  }

}
