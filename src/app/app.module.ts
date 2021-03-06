import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {StorageServiceModule} from 'ngx-webstorage-service';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {reducer} from './store/reduce/cart.reducer';
import {DragScrollModule} from 'ngx-drag-scroll/lib';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// component
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {FooterComponent} from './component/footer/footer.component';
import {CarouselComponent} from './component/carousel/carousel.component';
import {ContactusComponent} from './component/contactus/contactus.component';
import {LoginComponent} from './component/login/login.component';
import {ProductdetailComponent} from './component/productdetail/productdetail.component';
import {RegistrationComponent} from './component/registration/registration.component';
import {AboutusComponent} from './component/aboutus/aboutus.component';
import { AuthService} from './service/auth.service';
import { AddNewItemComponent } from './component/admin/add-new-item/add-new-item.component';
import {ItemServiceService} from './service/admin/item-service.service';
import {FileUploadModule} from 'ng2-file-upload';
import { DetailItemComponent } from './component/detail-item/detail-item.component';
import {MatGridListModule, MatIconModule, MatButtonModule, MatToolbarModule} from '@angular/material';
import { ProductListComponent } from './component/product-list/product-list.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { CartComponent } from './component/cart/cart.component';

import {NguCarouselModule} from '@ngu/carousel';
import { CardviewComponent } from './component/cardview/cardview.component';
import { MultiImageSliderComponent } from './component/multi-image-slider/multi-image-slider.component';
import { PromotionalProductComponent } from './component/promotional-product/promotional-product.component';
import { SlickCarouselComponent } from './component/slick-carousel/slick-carousel.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ReturnExchangeComponent } from './component/return-exchange/return-exchange.component';
import { ShippingComponent } from './component/shipping/shipping.component';
import { BlogComponentComponent } from './component/blog-component/blog-component.component';
import { ModalComponent } from './component/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    CarouselComponent,
    ContactusComponent,
    FooterComponent,
    LoginComponent,
    ProductdetailComponent,
    RegistrationComponent,
    AddNewItemComponent,
    DetailItemComponent,
    ProductListComponent,
    PagenotfoundComponent,
    CartComponent,
    CardviewComponent,
    MultiImageSliderComponent,
    PromotionalProductComponent,
    SlickCarouselComponent,
    CheckoutComponent,
    ReturnExchangeComponent,
    ShippingComponent,
    BlogComponentComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'herAdditions'
    }),
    DragScrollModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FileUploadModule,
    ToastrModule.forRoot(),
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    StorageServiceModule,
    NguCarouselModule,
    MatToolbarModule,
    NgbModule,
StoreModule.forRoot({ cart: reducer })
  ],
  exports: [ MatGridListModule ],
  entryComponents: [ModalComponent],
  providers: [AuthService, ItemServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
