import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CategoriesComponent } from './categories.component';

import {CategoryEditComponent} from "./category-edit/category-edit.component";



const categoriesRoutes=[
  {path:'',component:CategoriesComponent,children:[
        {path:':id',component:CategoryEditComponent},
     
       
   ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(categoriesRoutes),
  ],
  exports:[
      RouterModule
  ]
})


export class CategoriesRoutingModule {

}


