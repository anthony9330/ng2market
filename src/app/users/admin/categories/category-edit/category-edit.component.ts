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
  category:Category;


  ngOnInit() {
   this.route.params.subscribe((
     params:Params)=>{
       this.id=+params['id'];    


        if(this.id){
           this.editMode=true;
           this.userService.getCategories().subscribe(
               (categories)=>{
                 console.log(categories);
              
                 this.category=this.userService.getCategory(this.id);
                 this.setForm();


             });
         }
       
       this.initForm();

   });

   


    
  }

  // initForm(){

  //   if(this.editMode){
  //       const category =this.userService.getCategory(this.id);
  //     if(category){
      
  //     let additionalFields=category.additionalFields;
  //      var addFieldsArr= new FormArray([]);
  //       if(additionalFields){
  //         console.log(additionalFields);
  //           additionalFields=JSON.parse(additionalFields);

            
           
  //           additionalFields.forEach(function(field){
  //                addFieldsArr.push(new FormControl(field));
  //                  console.log(field);
  //           });
          
  //       }
  //       this.categoryForm=new FormGroup({
  //             'category_name':new FormControl(category.category_name,Validators.required),
  //               // 'id':'',
  //             'additionalFields':addFieldsArr,
  //             // 'additionalField':new FormArray([]),
  //             // 'imagesPath':new FormControl(category.imagesPath),

  //         });
  //       }

  //       console.log(this.categoryForm);
  //     }else {
        

  //       let category_name=null
  //       let additionalFields=null;
  //       let imagesPath='';
       
        
  //       this.categoryForm= new FormGroup({
  //          'category_name':new FormControl(category_name,Validators.required),
  //           'additionalFields':new FormArray([]),
         
  //       });

  //         this.categoryForm.controls.category_name.setValue(" ");
  //     }



  //   }



    initForm(){
        this.categoryForm=new FormGroup({
              'category_name':new FormControl('',Validators.required),
                // 'id':'',
              'additionalFields':new FormArray([]),
              // 'additionalField':new FormArray([]),
              // 'imagesPath':new FormControl(category.imagesPath),

          });
    

    }


//   ПРИДУМАТИ КРАЩИЙ СПОСІБ НІЖ ІНІЦІАЛІЗАЦІЯ ДВОХ ФОРМ INIT AND SETFORM
//   І ТАК САМО ДВА SUBSCRIBE НА CATEGORIES.COMPONENT AND CATEGORIES-EDIT.COMPONENT
//   SUBSCRIBE INSIDE SUBSCRIBE IN CATEGORIES.COMPONENT.TS ЧИ ПРАВИЛЬНО ВЗАГАЛІ


    setForm(){

      if(this.editMode){
          let  additionalFields=this.category.additionalFields;

           var addFieldsArr= new FormArray([]);
            if(additionalFields){
              console.log(additionalFields);
                let additionalFieldsArr=JSON.parse(additionalFields);           
                additionalFieldsArr.forEach(function(field){
                     addFieldsArr.push(new FormControl(field));
                       console.log(field);
                });
            }
           

             this.categoryForm= new FormGroup({
                'category_name':new FormControl(this.category.category_name,Validators.required),
                 'additionalFields':addFieldsArr,
             })
          
            console.log( );

          }
          else {
            this.categoryForm= new FormGroup({
                'category_name':new FormControl('',Validators.required),
                 'additionalFields':new FormArray([]),
             })
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
        // response has a category object that was added
         let catForm=response;
         if(this.id){
              this.userService.catChanged(catForm,'upd');
         }
         else {
            this.userService.catChanged(catForm,'add');
         }
      
         
       },
       (error)=>{
         console.log(error);
       });
  }

  onDelete(){
    this.userService.deleteCategory(this.id).subscribe( (response)=>{
      
         let category_del= new Category;
         category_del.id=this.id;
         
         this.userService.catChanged(category_del,'del');
       },
       (error)=>{
         console.log(error);
       });
  }



}
