import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoreComponent} from "./core.component";
import {ProductsComponent} from "../products/products.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "../auth/login/login.component";
import {RegisterComponent} from "../auth/register/register.component";


const coreRoutes=[
  {path:'',component:CoreComponent,children:[
        {path:'',component:HomeComponent},
       {path:'products',component:ProductsComponent},
       
   ]}
];




@NgModule({
  imports: [
    RouterModule.forChild(coreRoutes),
  ],
  exports:[
      RouterModule
  ]
})
export class CoreRoutingModule {

}
