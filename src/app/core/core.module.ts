
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BsDropdownModule,ModalModule,CarouselModule  } from 'ngx-bootstrap';
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {FooterComponent} from "./footer/footer.component";
import {ProductsComponent} from "../products/products.component";
import {ProductSingleComponent} from "../products/product-single/product-single.component";
import {CoreComponent} from "./core.component";
import {CoreRoutingModule} from "./core-routing.module";
import {CommonModule} from "@angular/common";
import {AuthService} from "../auth/auth.service";
import {LoginComponent} from "../auth/login/login.component";
import {RegisterComponent} from "../auth/register/register.component";






@NgModule({
    declarations: [

    HeaderComponent,

    HomeComponent,

    FooterComponent,
    ProductsComponent,
    ProductSingleComponent,
    CoreComponent


  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
  //  ModalModule.forRoot(),
    CoreRoutingModule,
    CarouselModule.forRoot()

  ],
    // providers: [AuthService],
})

export class CoreModule {

}
