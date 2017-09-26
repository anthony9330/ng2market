import { NgModule } from '@angular/core';
import {CommonModule}  from '@angular/common';
import {LoaderComponent} from './loader.component';

import {MdProgressBarModule} from "@angular/material";


@NgModule({
  imports:[
  MdProgressBarModule,
  CommonModule
  ],
  declarations:[
   LoaderComponent
  ],
  exports:[
    CommonModule,
   LoaderComponent
  ]
})

export class SharedModule {

}