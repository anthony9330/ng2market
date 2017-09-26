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
import { AuthHeaderComponent } from './auth/auth-header/auth-header.component';
import { UsersHeaderComponent } from './users/users-header/users-header.component';
import { UsersService } from './users/users.service';
import {AuthGuard} from './auth/auth-guard.service';

// import {BrowserAnimationsModule} from '@angular/animations';
// import {MdButtonModule, MdCheckboxModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
      LoginComponent,
    RegisterComponent,
    AdminComponent, 
    UserComponent, AuthHeaderComponent, UsersHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
   
    // BrowserAnimationsModule
    

  ],
  providers: [BsModalRef,AuthService,UsersService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

