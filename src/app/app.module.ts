import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BsDropdownModule,ModalModule,CarouselModule  } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {AuthService} from './auth/auth.service';
import {AppRoutingModule} from "./app-routing.module";
import { AuthHeaderComponent } from './auth/auth-header/auth-header.component';
import { UsersService } from './users/users.service';
import {AuthGuard} from './auth/auth-guard.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";





@NgModule({
  declarations: [
    AppComponent,
      LoginComponent,
    RegisterComponent,
  
 
     AuthHeaderComponent,
      // UsersHeaderComponent,
  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    



    

  ],
  providers: [BsModalRef,
  AuthService,
  UsersService,
  AuthGuard,
  // provides in shared folder
  // LoaderService
  ],
  bootstrap: [AppComponent]
 
})
export class AppModule { }

