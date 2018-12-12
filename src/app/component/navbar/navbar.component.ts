import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Cart} from '../../model/cart';
import {AppState} from '../../store/action/app.state';
import {Observable} from 'rxjs';
import {Item} from '../../model/item';
// import {LocalstorageService} from '../../service/localstorage.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  itemcount;
  username;
  availableUser: boolean = false;
cartitem: Observable<Cart[]>
  constructor(private store: Store<AppState>) {
  this.cartitem = store.select('cart');
  this.cartitem.subscribe(res => {
    this.itemcount = res.length - 1;
  });
  }
  ngOnInit() {
/*  if(this.storage.getToken())

    if (this.storage.getToken() === '0' || this.storage.getToken() === '') {
  this.availableUser = false;
} else {
      this.username = this.storage.getname();
  this.availableUser = true;
}*/
  }
}
