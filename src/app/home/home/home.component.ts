import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product.model";
import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  product: any;
  quantity: number;
  sub: any;
  quantityInput: any;

  constructor(private productService: ProductService,
              private cartService: CartService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts (): void {
    this.productService.getProducts()
         .subscribe(data => {
             this.product = data;
             console.log(data)
         })
 };
 changeQuantity = (newQuantity:number) => {
     this.quantity = newQuantity;
 };
 addToCart = (product) => {
     if(this.quantity) this.cartService.addToCart({product,quantity:this.quantity})
 };
 ngOnDestroy() {
     this.sub.unsubscribe();
 }
 Increase() {
   let value = parseInt(this.quantityInput.nativeElement.value);
   if (this.product.quantity >= 1){
     value++;

     if (value > this.product.quantity) {
       // @ts-ignore
       value = this.product.quantity;
     }
   } else {
     return;
   }

   this.quantityInput.nativeElement.value = value.toString();
 }

 Decrease() {
   let value = parseInt(this.quantityInput.nativeElement.value);
   if (this.product.quantity > 0){
     value--;

     if (value <= 0) {
       // @ts-ignore
       value = 0;
     }
   } else {
     return;
   }
   this.quantityInput.nativeElement.value = value.toString();
 }
}
