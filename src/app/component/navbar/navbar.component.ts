import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Cart} from '../../model/cart';
import {AppState} from '../../store/action/app.state';
import {Observable} from 'rxjs';
import {Item} from '../../model/item';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  itemcount;
cartitem: Observable<Cart[]>
  constructor(private store: Store<AppState>) {
  this.cartitem = store.select('cart');
  this.cartitem.subscribe(res => {
    this.itemcount = res.length - 1;
  });
  }
  ngOnInit() {

  }
}
