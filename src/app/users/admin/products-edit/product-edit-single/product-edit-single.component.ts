import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params, Router, Data} from "@angular/router";
import {FormGroup,FormControl,Validators,FormArray,FormBuilder} from "@angular/forms";
import {UsersService} from "../../../users.service";
import {Category} from "../../../category.model";


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
  // category:Category;


  ngOnInit() {
   this.route.params.subscribe((
     params:Params)=>{
       this.id=+params['id'];    

      if(this.id){
        this.userService.getProduct(this.id);
      }
          
       this.initForm();

   });

   


    
  }

  initForm(){

      this.productForm= new FormGroup({
        'title':new FormControl()
      })
  
     

    }





    

    AddField(){
     
     
    }
    



  onSubmit(){
   
  }

  onDelete(){
    
  }

}
