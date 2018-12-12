import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product/product.service';
import {Item} from '../../model/item';

@Component({
  selector: 'app-promotional-product',
  templateUrl: './promotional-product.component.html',
  styleUrls: ['./promotional-product.component.css']
})
export class PromotionalProductComponent implements OnInit {
products: Item[];
  constructor(private http: ProductService) { }

  ngOnInit() {
this.initialServerCall();
  }

  initialServerCall() {
    this.http.getNewPromo('new arrival', 3).subscribe((res) => {
      this.products = res.products;
    });
  }

}
