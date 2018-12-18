import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Cart} from '../../model/cart';
import {AppState} from '../../store/action/app.state';
import {Observable} from 'rxjs';
import {LocalstoreService} from '../../service/localStorage/localstore.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  itemcount;
  username = '';
  availableUser: boolean = false;
cartitem: Observable<Cart[]>
  constructor(private store: Store<AppState>, private storage: LocalstoreService) {
  this.cartitem = store.select('cart');
  this.cartitem.subscribe(res => {
    this.itemcount = res.length - 1;
  });
  }
  ngOnInit() {
  this.storage.currentusername.subscribe(user => {
    this.username = user;
  })
console.log(':::::::local:::::::' + this.storage.getUsername());
if (this.storage.getUsername() === '0' || this.storage.getUsername() === null) {
this.storage.providetoSetUsername('');
} else {
  this.storage.providetoSetUsername(this.storage.getUsername());
 // this.username = this.storage.getUsername();
}
  }
  logout () {
  this.storage.setUsername('');
  this.storage.providetoSetUsername('');
}
}
