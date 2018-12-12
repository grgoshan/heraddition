import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product/product.service';
import {Route, ActivatedRoute} from '@angular/router';
import {Item} from '../../model/item';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  breakpoint: number;
products: Item[];
crumTitle;

  constructor(private http: ProductService, private route: ActivatedRoute ) {
  }

  ngOnInit() {
this.route.queryParams.subscribe(params => {
  console.log(params['category']);
  this.crumTitle = params['category'].toUpperCase();
  this.intialServerCall(params['category']);
})

   /*

    https://github.com/KrunalLathiya/Angular7CRUDExample/blob/master/src/app/gst-get/gst-get.component.html
    this.api.getBooks()

      .subscribe(res => {
        console.log(res);
        this.books = res;
      }, err => {
        console.log(err);
      });
  }*/
    if (window.innerWidth <= 600) {
      this.breakpoint = 1;
    } else  if (window.innerWidth <= 900) {
      this.breakpoint = 2;
    } else if (window.innerWidth <= 1195) {
      this.breakpoint = 3;
    } else if (window.innerWidth >= 1200) {
      this.breakpoint = 4;
    }
    /*  this.breakpoint = (window.innerWidth <= 576) = 1  ;
    this.breakpoint = (window.innerWidth <= 768 ) ? 2 : 3;
*/
  }

  onResize(event) {
    if (event.target.innerWidth <= 600) {
      this.breakpoint = 1;
    } else if (event.target.innerWidth <= 900) {
      this.breakpoint = 2;
    } else if (event.target.innerWidth <= 1195) {
      this.breakpoint = 3;
    } else if (event.target.innerWidth >= 1200) {
      this.breakpoint = 4;
    }
    /*this.breakpoint = (event.target.innerWidth <= 576) ? 1 : 2;
        this.breakpoint = (event.target.innerWidth <= 768) ? 2 : 3;
      }*/
  }
  onsize(event) {
    console.log((event.target.innerWidth));
    console.log(window.innerWidth);
  }



  intialServerCall (query) {
    this.http.getProducts(query).subscribe((res ) => {
      this.products = res.products;
    }, err => {
      console.log(err);
    });
  }
}
