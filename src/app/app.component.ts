import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  collection: any= [];
  page: any;

  ngOnInit(): void {
    this.getCollectionData();
  }

  getCollectionData(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(r =>{
      this.collection=r;
    })
  }

}
