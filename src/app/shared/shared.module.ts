import { NgModule } from '@angular/core';
import {CommonModule}  from '@angular/common';
import {LoaderComponent} from './loader.component';

import {MdProgressBarModule} from "@angular/material";
import { TokenModalComponent } from './token-modal/token-modal.component';
import {MatDialogModule} from '@angular/material';
import {UsersHeaderComponent } from "./users-header/users-header.component";
import { RouterModule, Routes } from '@angular/router';
import {LoaderService} from "./loader.service";


@NgModule({
  declarations:[
   LoaderComponent,
   TokenModalComponent,
    UsersHeaderComponent
  ],

  imports:[
  MdProgressBarModule,
  CommonModule,
  MatDialogModule,
  RouterModule
 
  ],

  exports:[
    CommonModule,
   LoaderComponent,
   UsersHeaderComponent
   // RouterModule
  ],
    entryComponents: [
        TokenModalComponent
    ],
    providers:[LoaderService],

})

export class SharedModule {

}