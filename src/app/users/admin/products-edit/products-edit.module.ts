import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonModule} from "@angular/common";

import {ProductsRoutingModule} from "./products-routing.module";
import {ProductsEditComponent} from "./products-edit.component";
import {ProductEditSingleComponent} from "./product-edit-single/product-edit-single.component";


import { MdTableModule } from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {MdPaginatorModule,MatInputModule,MdSelectModule} from '@angular/material';


@NgModule({
  declarations: [
  ProductsEditComponent,
  ProductEditSingleComponent
  ],
  imports: [
    CommonModule,
    FormsModule, //?
    ReactiveFormsModule,
    HttpModule,
   ProductsRoutingModule,
    MdTableModule,
    CdkTableModule,
    MdPaginatorModule,
    MatInputModule,
    MdSelectModule
  

  ],
  
  providers: [],
 
})

export class ProductsModule {

}