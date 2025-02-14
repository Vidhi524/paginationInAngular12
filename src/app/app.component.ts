import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
  

  // collection: any= [];
  // page: any;
  // maxSize=9;
  // autoTrue: boolean = true;

  // public config: PaginationInstance = {
  //   id: 'advanced',       // Corrected the syntax here
  //   itemsPerPage: 5,
  //   currentPage: 1
  // };
  

  // products: any= [];
  // product: any;

  // ngOnInit(): void {
  //   this.getCollectionData();


    // this.getProductsData()
  // }

  // getCollectionData(){
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(res => res.json())
  //   .then(r =>{
  //     this.collection=r;
  //   })
  // }

  // getProductsData(){
  //   fetch('https://dummyjson.com/products')
  //   .then(res => res.json())
  //   .then(r =>{
  //     this.products=r.products;
  //     // console.log(this.products);
  //   });
  // }

  // onPageChange(event: any):void{
  //   this.config.currentPage=event.page;
  // }

  // onPageBoundsCorrection(event: any):void{
  //   this.config.currentPage=event.page;
  // }



  //--------------------server side pagination --------------------

  page: number =1;
  total: number=50;
  loading: boolean=false;
  collection: any;

  public config: PaginationInstance ={
    id: 'server',
    itemsPerPage: 9,
    currentPage: this.page,
    totalItems: this.total
  };

  ngOnInit(){
    this.getCollectionData(this.config.currentPage);
  }
  
  getCollectionData(page: any){
    this.page=page;
    this.loading=true;
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${
        this.config.itemsPerPage}`)
      .then(res => res.json())
      .then(rjson=>{
        this.config.currentPage= page;
        this.collection=rjson;
        this.total=50;
        this.loading=false;
      });
  }



}

