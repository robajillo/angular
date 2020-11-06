import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Product} from "../models/product.model";
import {Cart} from "../models/cart.model";

@Injectable()
export class CartService {
    cartDataObs$: any;
    cartTotal$: any;
    CheckoutFromCart(arg0: number) {
      throw new Error('Method not implemented.');
    }

    public cartListSubject = new BehaviorSubject([]);
    public toggleCartSubject = new BehaviorSubject(false);

    toggleCart = () => {
        this.toggleCartSubject.next(!this.toggleCartSubject.getValue());
    };
    addToCart = (cart:Cart) => {
        let current = this.cartListSubject.getValue();
        let dup = current.find(c=>c.product.title === cart.product.title);
        if(dup) dup.quantity += cart.quantity;
        else current.push(cart);
        this.cartListSubject.next(current);
    };
    reloadCart = (cartList) => {
        this.cartListSubject.next(cartList);
    };
    removeCart = index => {
        let current = this.cartListSubject.getValue();
        current.splice(index,1);
        this.cartListSubject.next(current);
    };
}
