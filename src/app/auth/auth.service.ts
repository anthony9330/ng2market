import {Http,Headers,Response} from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs';


@Injectable()
export class AuthService {
    constructor(private http:Http){}

    token:string;

    openModal=new Subject<any>();

    emitModalTag(modal) {
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
        return this.http.post('http://ng2-market/public/api/user/signin',
          {email:email,password:password},
          {headers: new Headers({'X-Requested-With':'XMLHttpRequest'})})
        .map(
          (response:Response)=>{
              const token= response.json().token;
              const base64Url=token.split('.')[1];
              const base64=base64Url.replace('-','+').replace('_','/');
              return {token:token,decoded:JSON.parse(window.atob(base64))};
            }
          )
        .do(
            tokenData=>{
              this.token=tokenData.token;
              localStorage.setItem("token",tokenData.token);
            }
          );
    }

    getToken(){

      //   FIX IN CASE IF TOKEN EXPIRED LOOK INTO RECIPEAPP
      this.token= localStorage.getItem("token");
      return localStorage.getItem("token");
    }

    logOut(){
      this.token=null;
      localStorage.removeItem("token");
    }

  isAuthenticated(){
    this.token= localStorage.getItem("token");
    console.log('isAuthenticated call'+this.token);
    return this.token!=null;
  }







}
