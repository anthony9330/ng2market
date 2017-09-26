import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoaderService {

   private loaderSubject = new Subject<any>();

   loaderState = this.loaderSubject.asObservable();

  show() {
    console.log("show function from loader service");
        this.loaderSubject.next(<any>{show: true});
    }

    hide() {
        this.loaderSubject.next(<any>{show: false});
    }
}