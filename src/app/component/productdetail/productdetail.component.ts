import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product/product.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Item } from '../../model/item';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

name = '';
price = '';
description = '';
category = '';
tag = '';
images = [];
dImage= ''

  constructor(private http: ProductService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
this.serverCall();
  }

  serverCall() {
    const id = this.activeRoute.snapshot.params['id'];
    this.http.getProductDetail(id).subscribe(data => {
    this.name = data.name;
    this.price = data.price;
    this.description = data.description;
    this.category = data.category;
    this.tag = data.tag;
    this.images = data.productFiles;
    this.dImage = data.productFiles[0];
    });
  }
displayImage(postion) {
   // return this.images[postion];
  this.dImage = postion;
  console.log(this.dImage)
  return postion;
}
}
