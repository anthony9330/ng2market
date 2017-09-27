import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";

import { CategoriesComponent } from './categories/categories.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { UsersEditComponent } from './users-edit/users-edit.component';



const adminRoutes=[
  {path:'',component:AdminComponent,children:[
        {path:'products-edit',component:ProductsEditComponent},
        {path:'categories-edit',component:CategoriesComponent},
        {path:'users-edit',component:UsersEditComponent},
       
   ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes),
  ],
  exports:[
      RouterModule
  ]
})


export class AdminRoutingModule {

}


