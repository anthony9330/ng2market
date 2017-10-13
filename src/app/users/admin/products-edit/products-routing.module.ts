import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductsEditComponent } from './products-edit.component';

import {ProductEditSingleComponent} from "./product-edit-single/product-edit-single.component";



const productsRoutes=[
  {path:'',component:ProductsEditComponent,children:[
        {path:':id',component:ProductEditSingleComponent},
        {path:'new',component:ProductEditSingleComponent},
     
       
   ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(productsRoutes),
  ],
  exports:[
      RouterModule
  ]
})


export class ProductsRoutingModule {

}


