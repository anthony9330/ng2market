
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';

import { HomeComponent } from './core/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductsComponent } from './products/products.component';
import { ProductSingleComponent } from './products/product-single/product-single.component';

import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth/auth-guard.service';



    

const appRoutes=[

  {path:'main',loadChildren :'./core/core.module#CoreModule'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'userpage',loadChildren:'./users/user/user.module#UserModule'},
  {path:'adminpage',loadChildren:'./users/admin/admin.module#AdminModule'},
  {path:'',redirectTo: '/main',pathMatch: 'full'},
];




@NgModule({

  imports: [
    RouterModule.forRoot(appRoutes),


  ],
  exports:[
      RouterModule
  ]
})


export class AppRoutingModule{

}
