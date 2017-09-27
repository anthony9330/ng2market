import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {UserComponent} from "./user.component";
import {UserRoutingModule} from "./user-routing.module";
// import {LoaderService} from "../../shared/loader.service";


@NgModule({
  declarations: [
  UserComponent
    // UsersHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
      UserRoutingModule,
    SharedModule

  ],
  providers: [],
 
})

export class UserModule {

}