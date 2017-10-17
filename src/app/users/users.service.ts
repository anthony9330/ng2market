import {Injectable,OnDestroy} from "@angular/core";
import {Http,Headers,Response} from '@angular/http';
import { NgForm} from '@angular/forms';
import {AuthService} from "../auth/auth.service";
import {Category} from "./category.model";
import {Subject} from "rxjs/Subject";
import {Product} from "../products/product.model";

@Injectable()
export class UsersService implements OnDestroy{

    constructor(private http:Http,
              private authService:AuthService,
             ){

    }

 categories:Category[];
 categoriesChanged=new Subject();
 products:Product[];



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

  getCategories(){
    return this.http.get('http://ng2-market/public/api/categories',
        {headers:new Headers({'X-Requested-With':'XMLHttpRequest'})}).map(
        (response)=>{

            if(response.json().categories!=null && response.json().categories!=undefined){
                   this.categories=response.json().categories;
                   // this.catChanged();
                   return response.json().categories;
                  }
        })
  }

  catChanged(category:Category,state:string){
   
    if(state=='add'){
      this.categories.push(category);
    }
    else if(state=="upd"){
      this.categories.forEach(function(category_obj,i,arr){
            if(category_obj['id']==category['id']){
            arr[i]=category;
            
            }
         
      });

      // for(var i=0;i<this.categories.length;i++){
      //     if(this.categories[i]['id']==category['id']){
      //       this.categories[i]=category;
      //     }

      // }
    }
    else if(state="del"){

      this.categories.forEach(function(category_obj,i,arr){
            if(category_obj['id']==category['id']){
            arr.splice(i,1);
            }
          });

    }
        
     
      this.categoriesChanged.next(this.categories.slice());
  }

  getCategory(id):any{
 
    let _categoryObj;
         this.categories.forEach(function(categoryObj){
               if(categoryObj['id']==id){
                
                 _categoryObj=categoryObj;
              
               }
           });
        return _categoryObj;     
     
   }



  ngOnDestroy(){
    console.log("onDestroy userService Called");
  }



  

  submitCategory(category:Category,id:number){
      // console.log(category);`
      let category_name=category['category_name'];
      let additionalFields= category['additionalFields'];
      if(id){
        console.log("edit category");
         const headers =new Headers({'X-Requested-With':'XMLHttpRequest','Content-Type':'application/json'});
         return this.http.post('http://ng2-market/public/api/category/'+id+'?token='+this.getToken(),
              {category_name:category_name,
                additionalFields: JSON.stringify(additionalFields)},
              {headers:headers}).map((response)=>{
                  return response.json().category;
              });

      }
      else{

        return this.http.post('http://ng2-market/public/api/category?token='+this.getToken(),
        {category_name:category_name,
          additionalFields: JSON.stringify(additionalFields)},
        {headers:new Headers({'X-Requested-With':'XMLHttpRequest','Content-Type':'application/json'})}).map((response)=>{
            return response.json().category;
        });
      }

      
  }

  deleteCategory(id){
     
      const headers =new Headers({'X-Requested-With':'XMLHttpRequest','Content-Type':'application/json'});
    return this.http.post('http://ng2-market/public/api/delete_cat/'+id+'?token='+this.getToken(),
      {},
      {headers:headers}).map((response)=>{return response.json().$category});
  }

  getProducts(){
      const headers =new Headers({'X-Requested-With':'XMLHttpRequest','Content-Type':'application/json'});
    return this.http.get('http://ng2-market/public/api/products',{headers:headers}).map((response)=>{
        this.products=response.json().products;
      return response.json().products
    })
  }

  getProduct(id:number){
    let products= this.products;
    let product_;
    products.forEach(function(product){
        // console.log(product);
        if(product['id']==id){
          product_=product;
          return product;
        }
    });
    return product_;
  }

  updateProduct(id:number){
      const headers =new Headers({'X-Requested-With':'XMLHttpRequest','Content-Type':'application/json'});
      return this.http.post('http://ng2-market/public/api/product/'+id+'?tpken='+this.getToken(),
        {},
        {headers:headers}).map((response)=>{response.json()});
  }




 


  getToken(){
    return this.authService.getToken();
  }

}