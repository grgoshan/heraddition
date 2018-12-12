import { Component, OnInit , Input} from '@angular/core';
import {Item} from '../../model/item';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/action/app.state';
import {Cart} from '../../model/cart';
import {CreateCart} from '../../store/action/cart.action';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit {
@Input() product: Item;
  quantity = 1;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }
  addTocart(product) {
   this.store.dispatch(new CreateCart({
     id: product.id,
    name: product.name,
    price: product.price,
       description: product.description,
       image: product.productFiles,
    quantity: this.quantity,
     category: product.category
   }
   ));
  }
}
