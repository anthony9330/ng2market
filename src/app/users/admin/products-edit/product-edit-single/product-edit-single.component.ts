import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params, Router, Data} from "@angular/router";
import {FormGroup,FormControl,Validators,FormArray,FormBuilder} from "@angular/forms";
import {UsersService} from "../../../users.service";
import {Category} from "../../../category.model";
import {Product} from "../../../../products/product.model";


@Component({
  selector: 'app-product-edit-single',
  templateUrl: './product-edit-single.component.html',
  styleUrls: ['./product-edit-single.component.css']
})
export class ProductEditSingleComponent implements OnInit {

   constructor(private route:ActivatedRoute,
              private router:Router,
              private userService:UsersService,
              public fb: FormBuilder,) { }
  id:number;
  productForm:FormGroup;
  imagesPath:any;
  product:Product;
  categories:Category[];

  ngOnInit() {
   this.route.params.subscribe((
     params:Params)=>{
       this.id=+params['id'];    
       this.userService.getProducts().subscribe((products)=>{
          

          this.userService.getCategories().subscribe((categories)=>{
              this.categories=categories;
              console.log(categories);
               this.product=this.userService.getProduct(this.id);
                console.log(this.product);
                this.setForm();
          });
     
         
       });
 this.initForm();
          
    

   });

  }





//init form and setForm чи можна однією функцією ???
  initForm(){

      this.productForm= new FormGroup({
        'title':new FormControl('',Validators.required),
        'categories':new FormControl('',Validators.required),
        'price':new FormControl('',Validators.required),
        'description':new FormControl('',Validators.required),
        'location':new FormControl('',Validators.required),
        'additionalFields':new FormControl('',Validators.required),
        'approved':new FormControl('',Validators.required),
      })
 

    }

    setForm(){
        this.productForm=new FormGroup({
          'title':new FormControl(this.product.title,Validators.required),
          'categories':new FormControl(this.product.categoryID,Validators.required),
          'price':new FormControl(this.product.price,Validators.required),
          'description':new FormControl(this.product.description,Validators.required),
          'location':new FormControl(this.product.location,Validators.required),
          'additionalFields':new FormControl(this.product.additionalFields,Validators.required),
          'approved':new FormControl(this.product.approved,Validators.required),
        })
    }




    

    AddField(){
     
     
    }
    



  onSubmit(){
   
  }

  onDelete(){
    
  }

}
