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
  catFields:string[];
  catPrdFieldsObj={};
  catPrdFieldsArr=[];

 

  ngOnInit() {
   this.route.params.subscribe((
     params:Params)=>{
      this.initForm();
       this.id=+params['id'];    
       this.userService.getProducts().subscribe((products)=>{
          

          this.userService.getCategories().subscribe((categories)=>{
              this.categories=categories;
              // console.log(categories);
               this.product=this.userService.getProduct(this.id);
               this.showAddFields(this.product.categoryID);
                this.setForm();

              
                  // console.log( this.productForm);


                 this.productForm.controls['categories'].valueChanges.subscribe((id)=>{
                    this.showAddFields(id);
                    // console.log("add fields form");
                    // console.log( this.productForm.controls['additionalFields']);
                    this.productForm.controls['additionalFields']= this.setFields(); 
                 });
               

          });
       });
      


   });

  }

isEmptyObj(obj){
  for(var prop in obj){
              if (obj.hasOwnProperty(prop)){
                return false;
              }
          }

          return  JSON.stringify(obj) === JSON.stringify({});
}



  showAddFields(id:number){

       //GET CAT NAMES AND SET THEM TO VAR
      this.categories.forEach((category_,i,marr)=>{
            if(category_['id']==id){
              this.catFields=JSON.parse(category_.additionalFields);
            }
           
      });


      let prdFields=this.product.additionalFields;


     //SET TO EMPTY ARRAY EVERY TIME WHEN CATEGORY SELECT CHANGES
        this.catPrdFieldsArr=[];

     //CHECK IF PRODUCT ADDFIELDS IS NOT EMPTY AND SET CAT FIELDS TO PRDCT FIELDS IF MACTH
        if(prdFields){
           let prdFieldsArrObj=JSON.parse(prdFields);
           // console.log(prdFieldsArrObj);
              this.catFields.forEach((ctFieldName,i,arr)=>{
                prdFieldsArrObj.forEach((prdFields,i,arr)=>{
                       if(ctFieldName==prdFields['catName']){
                         // console.log(prdFields['catName']);
                         this.catPrdFieldsArr.push({'catName':prdFields['catName'],'catValue':prdFields['catValue']});
                       }
                });
              });
              //CHANGE ARRAY  TO SET CATEGORY ADDITIONAL FIELDS
            //SET ADD FIELDS TO PRODUCT IF CATEGROIES FIELDS DONT MATCH WITH PROD

              if(this.catPrdFieldsArr.length==0){
                this.catFields.forEach((ctFieldName,i,arr)=>{
                    
                           this.catPrdFieldsArr.push({
                                'catName':ctFieldName,
                                'catValue':''
                              })
                });
              }
        }
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
       this.catPrdFieldsArr.forEach((catField,i,arr)=>{
               let option=new FormGroup({
                'catName':new FormControl(catField['catName'],Validators.required),
               'catValue':new FormControl(catField['catValue'],Validators.required)
               });
             

                addFieldArr.push(option)
       });
     

        return addFieldArr;

    }

//SETS INIZIALIZED  VALUES TO FORM
    setForm(){
        this.productForm.controls['title'].patchValue(this.product.title);
        this.productForm.controls['categories'].patchValue(this.product.categoryID);
        this.productForm.controls['price'].patchValue(this.product.price);
        this.productForm.controls['description'].patchValue(this.product.description);
        this.productForm.controls['location'].patchValue(this.product.location);
       this.productForm.controls['additionalFields']= this.setFields(); 
        this.productForm.controls['approved'].patchValue(this.product.approved);
    }




    

   


  onSubmit(){
  
    // console.log( this.productForm.value);
    // console.log(this.id);
    this.userService.updateProduct(this.productForm,this.id)
    .subscribe((response)=>{
      console.log(response);
    },
    (error)=>{
      console.log(error);
    });
  }

  onDelete(){

    this.userService.deleteProduct(this.id).subscribe((product:Product)=>{
        this.userService.prodChanged(product,'del');
      console.log(product);
    });
    
  }

}
