import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params, Router, Data} from "@angular/router";
import {FormGroup,FormControl,Validators,FormArray,FormBuilder} from "@angular/forms";
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
              private userService:UsersService,
              public fb: FormBuilder,) { }
  id:number;
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
      
      let additionalFields=category.additionalFields;
       var addFieldsArr= new FormArray([]);
        if(additionalFields){
          console.log(additionalFields);
            additionalFields=JSON.parse(additionalFields);

            
           
            additionalFields.forEach(function(field){
                 addFieldsArr.push(new FormControl(field));
                   console.log(field);
            });
          
        }
        this.categoryForm=new FormGroup({
              'category_name':new FormControl(category.category_name,Validators.required),
                // 'id':'',
              'additionalFields':addFieldsArr,
              // 'additionalField':new FormArray([]),
              // 'imagesPath':new FormControl(category.imagesPath),

          });
        }

        console.log(this.categoryForm);
      }else {
        

        let category_name=null
        let additionalFields=null;
        let imagesPath='';
       
        
        this.categoryForm= new FormGroup({
           'category_name':new FormControl(category_name,Validators.required),
            'additionalFields':new FormArray([]),
         
        });

          this.categoryForm.controls.category_name.setValue(" ");
      }



    }
    

    AddField(){
      const field=new FormControl(null,Validators.required);
      (<FormArray>this.categoryForm.get("additionalFields")).push(field);
     
    }
    



  onSubmit(){
     console.log(this.categoryForm.value+" edit mode"+this.id);
     
     // this.userService.submitCategory(this.categoryForm.value);

     this.userService.submitCategory(this.categoryForm.value,this.id).subscribe(
       (response)=>{
         console.log(response);
       this.userService.getCategories();
       },
       (error)=>{
         console.log(error);
       });
  }

  onDelete(){
    this.userService.deleteCategory(this.id).subscribe( (response)=>{
         console.log(response);
         this.userService.getCategories();
       },
       (error)=>{
         console.log(error);
       });
  }



}
