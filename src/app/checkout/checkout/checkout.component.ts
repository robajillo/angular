import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Cart} from "../../models/cart.model";
import {Router} from "@angular/router";
import {OrderService} from "../../services/order.service";
import {NgxSpinnerService} from "ngx-spinner";
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartTotal: Number;
  showSpinner: Boolean;
  checkoutForm: any;
  cartData: any;
  constructor(private cartService: CartService,
              private orderService: OrderService,
              private router: Router,
              private  spinner: NgxSpinnerService,
              private fb: FormBuilder) {

    this.checkoutForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],

    });


  }

  ngOnInit() {
    this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);

  }

  onCheckout() {
    const spinnerName = "my-spinner";
    this.spinner.show(spinnerName);
    this.spinner.getSpinner(spinnerName)
      .pipe(
         first(({show}) => !!show)
      )
      .subscribe(() => {
         this.cartService.CheckoutFromCart(1);
      }
    );


  //console.log(this.checkoutForm.value);

  }
}
