import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Cart} from "../../models/cart.model";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList(cartList: any) {
    throw new Error('Method not implemented.');
  }


  cartTotal: Number;
  subTotal: Number;

  constructor(public cartService: CartService) {
  }


ngOnInit() {

}
changeQuantity = (cart,quantity) => {
    cart.quantity = quantity;
    this.cartService.reloadCart(this.cartList);
}
}