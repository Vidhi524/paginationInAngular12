import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  collection: any= [];
  products: any= [];
  page: any;
  product: any;

  ngOnInit(): void {
    this.getCollectionData();
    this.getProductsData()
  }

  getCollectionData(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(r =>{
      this.collection=r;
    })
  }

  getProductsData(){
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(r =>{
      this.products=r.products;
      // console.log(this.products);
    });
  }

}
