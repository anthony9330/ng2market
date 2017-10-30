import {Http,Headers,Response} from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import { tokenNotExpired } from 'angular2-jwt';
import {LoaderService} from "../shared/loader.service";
import {MdDialog, MdDialogRef} from '@angular/material';
import { TokenModalComponent } from "../shared/token-modal/token-modal.component";


@Injectable()
export class AuthService {

   token:string;
   openModal=new Subject<any>();

    constructor(private http:Http,
      private loader:LoaderService,
      public dialog: MdDialog){
      this.token=localStorage.getItem("token");
     
      console.log("Token not expired"+ tokenNotExpired());

      if(!tokenNotExpired() && this.token!=null){
       this.openDialog();
       this.logOut();
      }
     
    }

     openDialog(): void {

        let dialogRef = this.dialog.open(TokenModalComponent, {
          width: 'auto',
          data: { name: "name ", animal: "animal " }
        });

        dialogRef.afterClosed().subscribe(result => {
        
      
        });
      }
   

    emitModalTag(modal):void {
       this.openModal.next(modal);
    }

    getModal():Observable<any>{
        return this.openModal.asObservable();
    }

    signup(email:string,name:string,password:string,phone:string,location:string){

      return this.http.post('http://ng2-market/public/api/user/signup',
        {email:email,name:name,password:password,phone:phone,location:location},
        {headers:new Headers({'X-Requested-With':'XMLHttpRequest'})})
      // .map(
      //   (response)=>{
      //       return response.json();
      //    }
      //   );
    }

    signin(email:string,password:string){
         this.loader.show();
        return this.http.post('http://ng2-market/public/api/user/signin',
          {email:email,password:password},
          {headers: new Headers({'X-Requested-With':'XMLHttpRequest'})})
        .map(
          (response:Response)=>{
              const token= response.json().token;
              this.isAdmin(token);

              return {token:token};
            },
            (error:Error)=>{

            }
          )
        .do(
            tokenData=>{
              this.token=tokenData.token;
              localStorage.setItem("token",tokenData.token);
            }
          ).finally(()=>{
            this.loader.hide();
          });
    }

    getToken():string{

      //   FIX IN CASE IF TOKEN EXPIRED LOOK INTO RECIPEAPP
      // this.token= localStorage.getItem("token");
      // return localStorage.getItem("token");
      return this.token;
    }

    logOut(){
      this.token=null;
      localStorage.removeItem("token");
    }

  isAuthenticated():boolean{
    // this.token= localStorage.getItem("token");
    console.log('isAuthenticated call'+this.token);
    return this.token!=null;
  }




  isAdmin(token):boolean {
              const base64Url=token.split('.')[1];
              const base64=base64Url.replace('-','+').replace('_','/');
              console.log(JSON.parse(window.atob(base64)));
              const user=JSON.parse(window.atob(base64));
              const user_id=user.sub;
              if(user_id==1){
                return true;  
              }
              else return false;
  }







}
