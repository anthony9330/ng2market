import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";

import { CategoriesComponent } from './categories/categories.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import {CategoryEditComponent} from "./categories/category-edit/category-edit.component";
// import {CategoriesModule} from './categories/categories.module';


const adminRoutes=[
  {path:'',component:AdminComponent,children:[
        {path:'products-edit',component:ProductsEditComponent},
       

        // {path:'categories-edit',component:CategoriesComponent},
        {path:'categories-edit',loadChildren:'./categories/categories.module#CategoriesModule'},
        {path:'users-edit',component:UsersEditComponent},
       
        {path:'',redirectTo: 'categories-edit',pathMatch: 'full'},
       
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


