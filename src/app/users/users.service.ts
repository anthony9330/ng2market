import {Injectable} from "@angular/core";
import {Http,Headers,Response} from '@angular/http';
import { NgForm} from '@angular/forms';

import {AuthService} from "../auth/auth.service";

@Injectable()
export class UsersService{

    constructor(private http:Http,
              private authService:AuthService){

    }

  submitProduct(form:NgForm,file:File){
    console.log(form.value);
    var title=form.value.title;
    var categoryID=form.value.category;
    var description=form.value.description;
    var location=form.value.location;
    var price=form.value.price;
    var additionalFields='';
   
    var formData:FormData =new FormData();
    formData.append('image',file); 
    var objData={
        title:title,
        categoryID:categoryID,
        description:description,
        location:location,
        price:price,
        additionalFields:additionalFields
    } ;  
    formData.append('user_info',JSON.stringify(objData));    
    console.log(this.getToken());
    console.log(file);
  


    return this.http.post('http://ng2-market/public/api/product?token='+this.getToken(),
   formData,
      {headers:new Headers({'X-Requested-With':'XMLHttpRequest'})});
  }


  uploadPhoto(imageUpload:any){
    let input= new FormData();
      input.append("file",imageUpload)

    return this.http.post('http://ng2-market/public/api/imageload',input,{headers:new Headers({'Content-Type':undefined})});
  }

  getCategories(){
    return this.http.get('http://ng2-market/public/api/categories',
        {headers:new Headers({'X-Requested-With':'XMLHttpRequest'})})
  }

  getToken(){
    return this.authService.getToken();
  }

}