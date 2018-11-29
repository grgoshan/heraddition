import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {reducer} from './store/reduce/cart.reducer';

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
    CartComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'herAdditions'
    }),
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
    MatToolbarModule,
StoreModule.forRoot({ cart: reducer })
  ],
  exports: [ MatGridListModule ],
  providers: [AuthService, ItemServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
