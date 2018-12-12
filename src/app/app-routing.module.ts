import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {AppComponent} from './app.component';
import {AboutusComponent} from './component/aboutus/aboutus.component';
import {ContactusComponent} from './component/contactus/contactus.component';
import {LoginComponent} from './component/login/login.component';
import {RegistrationComponent} from './component/registration/registration.component';
import {ProductdetailComponent} from './component/productdetail/productdetail.component';
import {AddNewItemComponent} from './component/admin/add-new-item/add-new-item.component';
import {ProductListComponent} from './component/product-list/product-list.component';
import {DetailItemComponent} from './component/detail-item/detail-item.component';
import {PagenotfoundComponent} from './component/pagenotfound/pagenotfound.component';
import {CartComponent} from './component/cart/cart.component';
import {CardviewComponent} from './component/cardview/cardview.component';
import {MultiImageSliderComponent} from './component/multi-image-slider/multi-image-slider.component';
import {PromotionalProductComponent} from './component/promotional-product/promotional-product.component';
import {CheckoutComponent} from './component/checkout/checkout.component';
import {ShippingComponent} from './component/shipping/shipping.component';
import {ReturnExchangeComponent} from './component/return-exchange/return-exchange.component';
import {BlogComponentComponent} from './component/blog-component/blog-component.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'product/:id' , component: ProductdetailComponent},
  /*admin router*/
  {path: 'admin/additem', component: AddNewItemComponent},
  {path: 'products', component: ProductListComponent },
  {path: 'test', component: DetailItemComponent },
  {path: '404', component: PagenotfoundComponent},
  {path: 'cart', component: CartComponent},
  {path: 'card', component: CardviewComponent},
  {path: 'mul', component: MultiImageSliderComponent},
  {path: 'promo', component: PromotionalProductComponent},
  {path: 'bill' , component: CheckoutComponent},
  {path: 'shipping', component: ShippingComponent},
  {path: 'return&exchange', component: ReturnExchangeComponent},
  {path: 'blog', component: BlogComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
