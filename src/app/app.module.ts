import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BsDropdownModule,ModalModule,CarouselModule  } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';

import { HomeComponent } from './core/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductsComponent } from './products/products.component';
import { ProductSingleComponent } from './products/product-single/product-single.component';
import { AdminComponent } from './users/admin/admin.component';
import { UserComponent } from './users/user/user.component';

import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {AuthService} from './auth/auth.service';
import {AppRoutingModule} from "./app-routing.module";
import {CoreComponent} from "./core/core.component";
import {CoreModule} from "./core/core.module";



@NgModule({
  declarations: [
    AppComponent,
      LoginComponent,
    RegisterComponent,
    AdminComponent, 
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule
    

  ],
  providers: [BsModalRef,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
