import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import {UsersService} from "../users.service";
import {Response, RequestOptions} from '@angular/http';
import {Category} from "../category.model";
import {Headers} from "@angular/http";
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  categoriesList:Category;
  imgSrc='';
  file:File;
 


  imageHeaders= new Headers({'X-Requested-With':'XMLHttpRequest','Access-Control-Allow-Origin':'*','Authorization':localStorage.getItem('token')});

  constructor(private userService:UsersService,
    private http:Http) { }

  ngOnInit() {
    this.userService.getCategories().subscribe(
      (response:Response)=>{
        if(response.json().categories!=null && response.json().categories!=undefined){
          this.categoriesList=response.json().categories;
        }
      },
      (error:Response)=>{
          console.log(error);
      }

      );

  }


imageFinishedUploading(file: Event){
    console.log(file);
   // console.log(JSON.stringify(file));
}

  onSubmit(form:NgForm){
    
   
      this.userService.submitProduct(form,this.file).subscribe(
        (response)=>{console.log(response.json());},

        (error)=>{console.log("error"+error);}
        );
  }

  fileChange(event){
   let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        this.file = fileList[0];
         var img = document.querySelector("#preview");
            let formData:FormData = new FormData();
            formData.append('image', this.file);
            console.log("form data");
            console.log(formData);
         
           var reader = new FileReader();
             reader.onload = (event:any) => {
            
              this.imgSrc = event.target.result;
            }
             reader.readAsDataURL(this.file);
       
       
        this.http.post('http://ng2-market/public/api/imageload?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6Ly9uZzItbWFya2V0L3B1YmxpYy9hcGkvdXNlci9zaWduaW4iLCJpYXQiOjE1MDU4NDYwMzUsImV4cCI6MTUwNTg0OTYzNSwibmJmIjoxNTA1ODQ2MDM1LCJqdGkiOiIwV2VOb1plYjVUMVVYWXVnIn0.zj_zLml48J92LPEedf2k2vUnH0dmdNx7odlRKlimG1U', formData )
           
           
            .subscribe(
                data => console.log(data.json()),
                error => console.log(error)
            )

    }
  }





}
