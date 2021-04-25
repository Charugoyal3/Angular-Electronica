import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ListingComponent } from './pages/listing/listing.component';
import { ListingDetailComponent } from './pages/listing-detail/listing-detail.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';
import { ShoppingCartComponent } from './pages/checkout/shopping-cart/shopping-cart.component';
import { ShippingDetailsComponent } from './pages/checkout/shipping-details/shipping-details.component';
import { PaymentOptionsComponent } from './pages/checkout/payment-options/payment-options.component';
import { ErrorComponent } from './pages/error/error.component';
import { ListingItemComponent } from './pages/listing/listing-item/listing-item.component';
import { CouponComponent } from './pages/checkout/common/coupon/coupon.component';
import { SummaryComponent } from './pages/checkout/common/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ListingComponent,
    ListingDetailComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    ShoppingCartComponent,
    ShippingDetailsComponent,
    PaymentOptionsComponent,
    ErrorComponent,
    ListingItemComponent,
    CouponComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
