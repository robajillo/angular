import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {map} from "rxjs/operators";
import {CartService} from "../../services/cart.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements  OnInit {

  
    products: any;
    quantity: number = 1;
  id: any;
  thumbimages: any;
  sub: any;
  currentProduct: any;
  quantityInput: any;
  title: any;
  
    constructor(private route: ActivatedRoute,
                private productService:ProductService,
                private cartService:CartService
    ) { }

    ngOnInit(): void {
      this.getProducts();
    }
  
  
    getProducts (): void {
         this.productService.getAllProducts()
            .subscribe( data =>{
                this.products = data;
                console.log(data);
            })
    };
   
    removeAllProducts(): void {
      this.productService.deleteAll()
        .subscribe(
          response => {
            console.log(response);
            this.getProducts();
          },
          error => {
            console.log(error);
          });
    }
  
    searchTitle(): void {
      this.productService.findByTitle(this.title)
        .subscribe(
          data => {
            this.products = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
  
    addToCart(id: Number) {
      this.cartService.AddProductToCart(id, this.quantityInput.nativeElement.value);
    }
  
    Increase() {
      let value = parseInt(this.quantityInput.nativeElement.value);
      if (this.products.quantity >= 1){
        value++;
  
        if (value > this.products.quantity) {
        
          value = this.products.quantity;
        }
      } else {
        return;
      }
  
      this.quantityInput.nativeElement.value = value.toString();
    }
  
    Decrease() {
      let value = parseInt(this.quantityInput.nativeElement.value);
      if (this.products.quantity > 0){
        value--;
  
        if (value <= 0) {
          
          value = 0;
        }
      } else {
        return;
      }
      this.quantityInput.nativeElement.value = value.toString();
    }
  }
  