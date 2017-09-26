import { Component, OnInit } from '@angular/core';
import {LoaderService} from "./loader.service";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})


export class LoaderComponent {
  show=false;
 private subscription: Subscription;
      constructor(
        private loaderService: LoaderService
    ) { }

    ngOnInit() { 
        this.subscription = this.loaderService.loaderState
            .subscribe((state: any) => {
                this.show = state.show;
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
  
}