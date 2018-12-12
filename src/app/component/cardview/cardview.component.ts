import { Component, OnInit , Input} from '@angular/core';
import {Item} from '../../model/item';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent implements OnInit {
@Input()  product: Item;
@Input() image: string
  constructor() { }

  ngOnInit() {
    console.log('yo product card view ko ho ' + this.product.name);
    console.log('yo product card view ko ho ' + this.image);
}

}
