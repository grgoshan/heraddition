import { Component, OnInit } from '@angular/core';
import {Cart} from '../../model/cart';
import { Store} from '@ngrx/store';
import {AppState} from '../../store/action/app.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  itemcount;
  flag: boolean = true;
  carts: Cart[] = [];
  cartitem: Observable<Cart[]>

  constructor(private store: Store<AppState>) {
    this.cartitem = store.select('cart');
    this.cartitem.subscribe(res => {
      this.carts = res;
    });
  }

  ngOnInit() {
  }

}
