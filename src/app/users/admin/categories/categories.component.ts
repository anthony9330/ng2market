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

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})



export class CategoriesComponent implements OnInit {

  categories:any;
  displayedColumns = ['number', 'category_name'];
  
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


  AddCategory(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }

  



  ngOnInit() {
    // this.getCategories();
    console.log("categories initilized");
  this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);

    this.userService.getCategories().subscribe((categories:Category[])=>{
      console.log("subscribe to getCategories() from categories comp");
      // console.log(categories);
         this.exampleDatabase.loadData(categories);
         this.userService.categoriesChanged.subscribe((categor_changed)=>{
               console.log("categories for table data");
               console.log(categor_changed);
                this.exampleDatabase.loadData(categor_changed);
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