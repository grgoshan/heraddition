import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product/product.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Item } from '../../model/item';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/action/app.state';
import {Cart} from '../../model/cart';
import {CreateCart} from '../../store/action/cart.action';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
id = '';
name = '';
price = '';
description = '';
category = '';
tag = '';
images = [];
dImage = ''
  quantity = 1;
  constructor(private http: ProductService, private activeRoute: ActivatedRoute, private router: Router, private store: Store<AppState>) { }

  ngOnInit() {
this.serverCall();
  }

  serverCall() {
    const id = this.activeRoute.snapshot.params['id'];
    this.http.getProductDetail(id).subscribe(data => {
      this.id = data._id
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

  addTocart() {
    this.store.dispatch(new CreateCart({
        id: this.id ,
        name: this.name,
        price: this.price,
        description: this.description,
        image: this.dImage,
        quantity: this.quantity,
      category: this.category
      }
    ));
  }
}
