import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params, Router, Data} from "@angular/router";
import {FormGroup,FormControl,Validators} from "@angular/forms";
import {UsersService} from "../../../users.service";
import {Category} from "../../../category.model";


@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private router:Router,
              private userService:UsersService ) { }
  id:Number;
  editMode=false;
  categoryForm:FormGroup;
  category:Category;


  ngOnInit() {
   this.route.params.subscribe((
     params:Params)=>{
       // console.log(params);

       this.id=+params['id'];
      
     this.category=this.userService.getCategory(this.id);
       console.log("--end of get category");

   });

   this.initForm();


    
  }

  initForm(){

    this.categoryForm=new FormGroup({
        'category_name':new FormControl('',Validators.required)
    });
  }



  onSubmit(){

  }



}
