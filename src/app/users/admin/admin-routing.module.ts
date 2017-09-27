import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";




const adminRoutes=[
  {path:'',component:AdminComponent,children:[
       
       
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


