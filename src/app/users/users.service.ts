import {Injectable,OnDestroy} from "@angular/core";
import {Http,Headers,Response} from '@angular/http';
import { NgForm} from '@angular/forms';
import {AuthService} from "../auth/auth.service";
import {Category} from "./category.model";
import {Subject} from "rxjs/Subject";

@Injectable()
export class UsersService implements OnDestroy{

    constructor(private http:Http,
              private authService:AuthService,
             ){

    }

 categories:Category[];
 categoriesChanged=new Subject();


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
    console.log("file from user service");
    console.log(file);
    console.log(formData);
  


    return this.http.post('http://ng2-market/public/api/product?token='+this.getToken(),
       formData,
      {headers:new Headers({'X-Requested-With':'XMLHttpRequest'})});
  }


  uploadPhoto(imageUpload:any){
    let input= new FormData();
      input.append("file",imageUpload)

    return this.http.post('http://ng2-market/public/api/imageload',input,{headers:new Headers({'Content-Type':undefined})});
  }

  getCategoriesServer(){
    return this.http.get('http://ng2-market/public/api/categories',
        {headers:new Headers({'X-Requested-With':'XMLHttpRequest'})}).map(
        (response)=>{

            if(response.json().categories!=null && response.json().categories!=undefined){
             
                   return response.json().categories;
                  }
        })
        .subscribe(
          (categories)=>{
              // console.log(categories);
              this.setCategories(categories);
              return categories;
        })
  }

  getCategory(id){
 
    let _categoryObj;
 
      if(this.categories){

         this.categories.forEach(function(categoryObj){
               if(categoryObj['id']==id){
                 console.log(categoryObj);
                 _categoryObj=categoryObj;
              
               }
           });
        return _categoryObj;

      }
      else {
        return this.categoriesChanged.asObservable();
      }

    
 
    
     
   }



  ngOnDestroy(){
    console.log("onDestroy userService Called");
  }


  setCategories(categories:Category[]){
      this.categories=categories;
      this.categoriesChanged.next(this.categories.slice());
  }

  getCategories(){
    this.getCategoriesServer();
    return this.categoriesChanged.asObservable();
  }


 


  getToken(){
    return this.authService.getToken();
  }

}