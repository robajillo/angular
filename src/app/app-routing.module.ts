import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home/home.component';
import {LoginComponent} from './login/login/login.component';
import {RegisterComponent} from './register/register/register.component';
import {CartComponent} from './cart/cart/cart.component';
import {CheckoutComponent} from './checkout/checkout/checkout.component';
import {ProductComponent} from './product/product/product.component';
import {ThankyouComponent} from './thankyou/thankyou/thankyou.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'product', component: ProductComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'thankyou', component: ThankyouComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}