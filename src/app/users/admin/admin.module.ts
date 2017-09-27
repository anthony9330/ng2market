
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonModule} from "@angular/common";
import { AdminComponent } from './admin.component';
// import {UsersHeaderComponent} from "../../shared/users-header/users-header.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {SharedModule} from "../../shared/shared.module";
import { CategoriesComponent } from './categories/categories.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { UsersEditComponent } from './users-edit/users-edit.component';

@NgModule({
  declarations: [
    AdminComponent,
    CategoriesComponent,
    ProductsEditComponent,
    UsersEditComponent,
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