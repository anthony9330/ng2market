
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
import { MdTableModule } from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {MdPaginatorModule} from '@angular/material';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';

@NgModule({
  declarations: [
    AdminComponent,
    // CategoriesComponent,
    ProductsEditComponent,
    UsersEditComponent,
    // CategoryEditComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AdminRoutingModule,
    SharedModule,
       // CdkTableModule,
    // MdTableModule,
    // MdPaginatorModule

  ],
  
  providers: [],
 
})

export class AdminModule {

}