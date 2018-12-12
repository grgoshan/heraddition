import { Component, OnInit } from '@angular/core';
import {Cart} from '../../model/cart';
import { Store} from '@ngrx/store';
import {AppState} from '../../store/action/app.state';
import {Observable} from 'rxjs';
import {DeleteCart} from '../../store/action/cart.action';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalamount = 0 ;
  shippingAmount = 0;
  taxAmount = 0;
  finalAmount = 0;
  itemcount;
  flag: boolean = true;
  carts: Cart[] = [];
  firstFlag: boolean = true;
  cartitem: Observable<Cart[]>

  constructor(private store: Store<AppState>) {
    this.cartitem = store.select('cart');
    this.cartitem.subscribe(res => {
      this.carts = res;
      if (this.firstFlag) {
        console.log('hit inside....construct....' );
        for ( let i = 0; i <= this.carts.length; i++) {
          if ( this.carts[i].price === '') {
            this.totalamount = 0;
          } else {
            this.totalamount = this.totalamount + parseInt(this.carts[i].price) ;
          }
        }
      }
    });
    this.shippingAmount = (this.carts.length  - 1) * 5;
    console.log('val of length' + this.carts.length + '.......')
    this.taxAmount = this.totalamount * (8.875 / 100);
    this.finalAmount = this.totalamount + this.taxAmount + this.shippingAmount;
    this.firstFlag = false;
  }

  ngOnInit() {
   // this.getFinalAmount();
  }

  removeItem(id) {
    this.store.dispatch(new DeleteCart(id));
    this.cartitem = this.store.select('cart');
    this.cartitem.subscribe(res => {
      this.carts = res;
        console.log('hit inside...remove.....' );
        for ( let i = 0; i <= this.carts.length; i++) {
          if ( this.carts[i].price === '') {
            this.totalamount = 0;
          } else {
            this.totalamount = this.totalamount + parseInt(this.carts[i].price) ;
          }
        }
    });
    this.shippingAmount = (this.carts.length  - 1) * 5;
    console.log('val of length' + this.carts.length + '.......')
    this.taxAmount = this.totalamount * (8.875 / 100);
    this.finalAmount = this.totalamount + this.taxAmount + this.shippingAmount;
  }
  getFinalAmount(){
    for ( let i = 0; i <= this.carts.length; i++) {
      if ( this.carts[i].price === '') {
        this.totalamount = 0;
      } else {
        this.totalamount = this.totalamount + parseInt(this.carts[i].price) ;
      }
    }
    this.shippingAmount = (this.carts.length - 1) * 5;
    this.taxAmount = this.totalamount * (8.875 / 100 )
    this.finalAmount = this.totalamount + this.taxAmount + this.shippingAmount;
  }
  getAmount(){
    for ( let i = 0; i <= this.carts.length; i++) {
      if ( this.carts[i].price === '') {
        this.totalamount = 0;
      } else {
        this.totalamount = this.totalamount + parseInt(this.carts[i].price) ;
      }
    }
    return this.totalamount;
  }
  getTaxAmount() {
    for ( let i = 0; i <= this.carts.length; i++) {
      if ( this.carts[i].price === '') {
        this.totalamount = 0;
      } else {
        this.totalamount = this.totalamount + parseInt(this.carts[i].price) ;
      }
    }
    this.taxAmount = this.totalamount * (8.875 / 100 );
    return this.taxAmount;
  }


}
