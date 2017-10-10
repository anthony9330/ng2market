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
  // category:Category;


  ngOnInit() {
   this.route.params.subscribe((
     params:Params)=>{
       this.id=+params['id'];    
       if(this.id){
         this.editMode=true;

       }
       this.initForm();

   });

   


    
  }

  initForm(){

    if(this.editMode){
        const category =this.userService.getCategory(this.id);
      if(category){
      
        this.categoryForm=new FormGroup({
              'category_name':new FormControl(category.category_name,Validators.required),
              'additionalFields':new FormControl(category.additionalFields),
              // 'imagesPath':new FormControl(category.imagesPath),

          });
        }

        console.log(this.categoryForm);
      }else {
          

        let category_name=' '
        let additionalFields='';
        let imagesPath='';

        this.categoryForm= new FormGroup({
           'category_name':new FormControl(category_name,Validators.required),
            'additionalFields':new FormControl(additionalFields),
            // 'imagesPath':new FormControl(imagesPath),
        })
      }



    }
    
    



  onSubmit(){

  }



}
