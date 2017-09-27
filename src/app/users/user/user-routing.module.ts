import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user.component";




const userRoutes=[
  {path:'',component:UserComponent,children:[
       
       
   ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes),
  ],
  exports:[
      RouterModule
  ]
})


export class UserRoutingModule {

}


