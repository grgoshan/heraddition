import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit,
  ChangeDetectorRef,
  ElementRef,
  ViewChild,
  Renderer2,
} from '@angular/core';
import {NguCarouselConfig, NguCarouselModule, NguCarouselStore} from '@ngu/carousel';
import { Observable, interval, of } from 'rxjs';
import { startWith, switchMap, take, map } from 'rxjs/operators';
import {slider} from '../../slide-animation';
import {ProductService} from '../../service/product/product.service';
import {Item} from '../../model/item';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import {DragScrollComponent} from 'ngx-drag-scroll/lib';
import {Router, Routes, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-multi-image-slider',
  templateUrl: './multi-image-slider.component.html',
  styleUrls: ['./multi-image-slider.component.css'],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiImageSliderComponent implements OnInit, AfterViewInit {
  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;
  title = 'app works!';
  hideScrollbar;
  disabled;
  xDisabled;
  yDisabled;
  images = [
    'assets/about.jpg',
    'assets/item2.png',
    'assets/about.jpg',
    'assets/item2.png',
    'assets/about.jpg',
    'assets/item2.png',
    'assets/about.jpg',
    'assets/item2.png',
    'assets/about.jpg',
    'assets/item2.png',
    'assets/about.jpg',
    'assets/item2.png',
  ];
  img2: string[] = [];
  leftNavDisabled = false;
  rightNavDisabled = false;
  index = 0;
  private carouselToken: string;

  products: Item[];
  constructor(private cdr: ChangeDetectorRef, private http: ProductService, private router: Router) { }
  ngOnInit() {
    this.initialServerCall();
    // this.initialServerCall();
   //  setTimeout(this.initialServerCall, 3000)

  }
  initialServerCall() {
   this.http.getNewArrivalItems('new arrival', 4).subscribe((res) => {
     console.log('prop' + res.products)
     this.products = res.products;
     for (let i = 0; i <= this.products.length; i++) {
       if (this.products[i].productFiles === '') {
         this.img2.push('uploads/2018-11-12T06:25:34.795ZScreen Shot 2018-10-28 at 6.36.05 PM.png');
       } else {
         this.img2.push(this.products[i].productFiles);
         console.log('ye for  inside ' + this.products[i].productFiles);
       }
     }
     this.delay(3000);
     console.log('server call mult' + this.products[0] );
     console.log('server call mult' + this.products[1].name);
   }, error => {
     console.log('multi image slide::' + error);
   }) ;
  }
ngAfterViewInit() {
}

  clickItem(item) {
    const id = this.products[item].id
this.router.navigate(['product', id])
    console.log('item clicked');
  }

  remove() {
    this.images.pop();
  }

  toggleHideSB() {
    this.hideScrollbar = !this.hideScrollbar;
  }

  toggleDisable() {
    this.disabled = !this.disabled;
  }
  toggleXDisable() {
    this.xDisabled = !this.xDisabled;
  }
  toggleYDisable() {
    this.yDisabled = !this.yDisabled;
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  leftBoundStat(reachesLeftBound: boolean) {
    this.leftNavDisabled = reachesLeftBound;
  }

  rightBoundStat(reachesRightBound: boolean) {
    this.rightNavDisabled = reachesRightBound;
  }

  onSnapAnimationFinished() {
    console.log('snap animation finished');
  }

  onIndexChanged(idx) {
    this.index = idx;
    console.log('current index: ' + idx);
  }

  onDragScrollInitialized() {
    console.log('first demo drag scroll has been initialized.');
  }

  onResize(event) {
    if (event.target.innerWidth <= 600) {
     // this.breakpoint = 1;
    } else {
     // this.breakpoint = 2;
    }
  }
  async  delay(ms: number) {
    return new Promise( resolve => {
      this.moveRight();
      console.log('after delayyyy');
    } );
  }
}

