import { Component, OnInit,EventEmitter } from '@angular/core';
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
  product:Product;
  categories:Category[];
  catChngd:EventEmitter<any>= new EventEmitter();
  catFields;
 

  ngOnInit() {
   this.route.params.subscribe((
     params:Params)=>{
      this.initForm();
       this.id=+params['id'];    
       this.userService.getProducts().subscribe((products)=>{
          

          this.userService.getCategories().subscribe((categories)=>{
              this.categories=categories;
              console.log(categories);
               this.product=this.userService.getProduct(this.id);
               this.getAddFields(this.product.categoryID);
                // console.log(this.product);
                

                this.setForm();

                 // this.catChngd.subscribe((id)=>{

                 //   console.log(id);
                 //     this.getAddFields(id);
                 //     this.setForm();
                 //      console.log("categories changed id");
                 //  console.log(id);
                  
                 //     // this.setForm();
                 // });



               
                  console.log( this.productForm);


                 this.productForm.controls['categories'].valueChanges.subscribe((id)=>{
                    this.getAddFields(id);
                    console.log("categories changed id");
                  console.log(id);
                     // this.setForm();
                      // this.productForm.controls['additionalFields'].patchValue([1,2]);

                      this.productForm.controls['additionalFields']= this.setFields(); 
                 });
               

          });
       });
      


   });

  }

  getAddFields(id:number){
      this.categories.forEach((category_,i,marr)=>{
            if(category_['id']==id){
              this.catFields=JSON.parse(category_.additionalFields);
            }
           
      });

      console.log("product: ");
      console.log(this.product);

  }


  categoryChange(id:any){
   this.catChngd.emit(id);
    console.log(id);


  }







//init form and setForm чи можна однією функцією ???
  initForm(){

      this.productForm= new FormGroup({
        'title':new FormControl('',Validators.required),
        'categories':new FormControl('',Validators.required),
        'price':new FormControl('',Validators.required),
        'description':new FormControl('',Validators.required),
        'location':new FormControl('',Validators.required),
        'additionalFields':new FormArray([]),
        'approved':new FormControl('',Validators.required),
      })
 

    }

    setFields():any{
      let addFieldArr= new FormArray([]);
        this.catFields.forEach(function(category_,i,arr){
            addFieldArr.push(new FormControl(category_));
           
        });
        console.log(addFieldArr);

        return addFieldArr;
    }

//SETS INIZIALIZED BEFORE VALUES TO FORM
    setForm(){
        this.productForm.controls['title'].patchValue(this.product.title);
        this.productForm.controls['categories'].patchValue(this.product.categoryID);
        this.productForm.controls['price'].patchValue(this.product.price);
        this.productForm.controls['description'].patchValue(this.product.description);
        this.productForm.controls['location'].patchValue(this.product.location);
       this.productForm.controls['additionalFields']= this.setFields(); 
        this.productForm.controls['approved'].patchValue(this.product.approved);
    }




    

    AddField(){
     
     
    }
    



  onSubmit(){
   
  }

  onDelete(){
    
  }

}
