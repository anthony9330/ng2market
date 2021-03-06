import { Component, OnInit,ViewChild } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {MdPaginator} from '@angular/material';
import {Category} from "../../category.model";
import {UsersService} from "../../users.service";
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import {ActivatedRoute,Router} from "@angular/router";
import {Product} from "../../../products/product.model";

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  products:Product;
  displayedColumns = ['number', 'name','price','approved'];
  
   exampleDatabase = new ExampleDatabase();
   dataSource: ExampleDataSource | null;
    @ViewChild(MdPaginator) paginator: MdPaginator;


  constructor(public userService:UsersService,
              private router:Router,
              private route:ActivatedRoute) { }

  RowClick(row){
    let id=row.id;
    this.router.navigate([id],{relativeTo:this.route});
  }


  
  



  ngOnInit() {
    // this.getCategories();
    console.log("products initilized");
  this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);

    this.userService.getProducts().subscribe((products:Product[])=>{
      // console.log(products);
      this.exampleDatabase.loadData(products);

        this.userService.productsChanged.subscribe((products_:Product[])=>{
                 this.exampleDatabase.loadData(products_);
        });
    });
    
      
  }

}



export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
constructor() {  }

  dataChange = new BehaviorSubject<any>([]);
  get data(): any { 
 
    return this.dataChange.value; 
  }

  loadData(data){
    this.dataChange.next(data);
  }
}

export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MdPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<any> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this._exampleDatabase.data.slice();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {}
}
