import { Component, OnInit } from '@angular/core';
import {LoaderService} from ".././shared/loader.service";

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})

export class CoreComponent implements OnInit{
  constructor(
    private loaderService:LoaderService) { }

  ngOnInit() {
    console.log("core component");
    this.loaderService.hide();

  }
}

