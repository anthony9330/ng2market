
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonModule} from "@angular/common";
import { AdminComponent } from './admin.component';
// import {UsersHeaderComponent} from "../../shared/users-header/users-header.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    AdminComponent,
    // UsersHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AdminRoutingModule,
    SharedModule
  ],
  
  providers: [],
 
})

export class AdminModule {

}