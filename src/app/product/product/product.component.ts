import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {map} from "rxjs/operators";
import {CartService} from "../../services/cart.service";
import { from } from 'rxjs';
import {Product} from '../../models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements  OnInit {


  private sub;
  product: any;
  quantity: number = 1;
  quantityInput: any;
  submitted: boolean;
  
  constructor(private route: ActivatedRoute,
              private productService:ProductService,
              private cartService:CartService
  ) { }

  ngOnInit(): void {
    
  }

  saveProduct (): void {
    const data = {
      title: this.product.title,
      description: this.product.description,
      image: this.product.image,
      id: this.product.id,
      price: this.product.price,
      quantity: this.product.Published,
      category: this.product.category,
    };
    this.productService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newProduct(): void {
    this.submitted = false;
    this.product = {
      title: this.product.title,
      description: this.product.description,
      image: this.product.image,
      id: this.product.id,
      price: this.product.price,
      quantity: this.product.Published,
      category: this.product.category,
    };
  }
}
  