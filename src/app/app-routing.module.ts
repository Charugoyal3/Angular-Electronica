import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShippingDetailsComponent } from './pages/checkout/shipping-details/shipping-details.component';
import { ShoppingCartComponent } from './pages/checkout/shopping-cart/shopping-cart.component';
import { ListingDetailComponent } from './pages/listing-detail/listing-detail.component';
import {ListingComponent } from './pages/listing/listing.component';
import { PaymentOptionsComponent} from './pages/checkout/payment-options/payment-options.component'
import { OrderSuccessComponent } from './pages/order-success/order-success.component';
import { ErrorComponent } from './pages/error/error.component';
const routes: Routes = [

  {
    path: 'dashboard' ,component:ListingComponent
  },
  {
    path: 'dashboard/:id' ,component:ListingDetailComponent
  },
  {
    path:'shopping' ,component:ShoppingCartComponent
  },
  {
    path:'shipping', component:ShippingDetailsComponent
  },
  {
    path:'payment' , component:PaymentOptionsComponent
  },
  {
    path:'success', component:OrderSuccessComponent
  },
  { path: '',   redirectTo: 'dashboard', pathMatch: 'full' }, 
  {
    path:'**', component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
