import { Component, OnInit,ViewChild,AfterContentInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {UsersService} from "../users.service";
import {Response, RequestOptions} from '@angular/http';
import {Category} from "../category.model";
import {Headers} from "@angular/http";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {LoaderService} from "../../shared/loader.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,AfterContentInit {

  categoriesList:Category;
  imgSrc='';
  file:File;
 


  
  constructor(private userService:UsersService,
              private http:Http,
              private loader:LoaderService) { }

  ngOnInit() {

    console.log("userpage on init");

    this.userService.getCategories().subscribe(
      (response:Category)=>{
       
          this.categoriesList=response;
       
      },
      (error:Response)=>{
          console.log(error);
      }

      );
    this.userService.getCategories();


console.log("categories after declaration");
console.log(this.categoriesList);
   
    console.log("token from user component"+ this.userService.getToken());

  }

  ngAfterContentInit(){
      console.log("after conyent Init");
      console.log(this.categoriesList);
  }


imageFinishedUploading(file: Event){
    console.log(file);
   // console.log(JSON.stringify(file));
}

  onSubmit(form:NgForm){
    this.loader.show();
   
      this.userService.submitProduct(form,this.file).subscribe(
        (response)=>{
          alert("succesfully uploaded");
          console.log(response.json());
        },

        (error)=>{
          alert("aomething went wrong");
          console.log("error"+error);
        },

        );
      this.loader.hide();
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
       
       
        // this.http.post('http://ng2-market/public/api/imageload?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6Ly9uZzItbWFya2V0L3B1YmxpYy9hcGkvdXNlci9zaWduaW4iLCJpYXQiOjE1MDU4NDYwMzUsImV4cCI6MTUwNTg0OTYzNSwibmJmIjoxNTA1ODQ2MDM1LCJqdGkiOiIwV2VOb1plYjVUMVVYWXVnIn0.zj_zLml48J92LPEedf2k2vUnH0dmdNx7odlRKlimG1U', formData )
           
           
        //     .subscribe(
        //         data => console.log(data.json()),
        //         error => console.log(error)
        //     )

    }
  }





}
