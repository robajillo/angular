import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Cart} from "../../models/cart.model";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  public collapse: boolean = false;
    public cart_num:number;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartService.cartListSubject
        .subscribe(res => {
            this.cart_num = res.length;
        })
}
toggleCartPopup = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.cartService.toggleCart()
}
}