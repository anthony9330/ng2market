import {Injectable} from "@angular/core";
import {Http,Headers,Response} from '@angular/http';
import { NgForm} from '@angular/forms';

@Injectable()
export class UsersService{

    constructor(private http:Http){

    }

  submitProduct(form:NgForm){


    // return this.http.post('http://ng2-market/public/api/user/si')
  }

}