import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonModule} from "@angular/common";
// import {SharedModule} from "../../shared/shared.module";
import {CategoriesComponent} from "./categories.component";
import {CategoriesRoutingModule} from "./categories-routing.module";
import {CategoryEditComponent} from "./category-edit/category-edit.component";

import { MdTableModule } from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {MdPaginatorModule} from '@angular/material';

@NgModule({
  declarations: [
   CategoriesComponent,
   CategoryEditComponent 

  ],
  imports: [
    CommonModule,
    FormsModule, //?
    ReactiveFormsModule,
    HttpModule,
    CategoriesRoutingModule,
    MdTableModule,
    CdkTableModule,
    MdPaginatorModule
  

  ],
  
  providers: [],
 
})

export class CategoriesModule {

}