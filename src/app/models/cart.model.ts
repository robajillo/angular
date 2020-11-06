import {ProductModelServer} from "./product.model";

export interface CartModelServer {
  total: Number;
  data: [{
    product: ProductModelServer,
    numInCart: Number
  }];
}

export interface CartModelPublic {
  data: any;
  forEach: any;
  incart: number;
  total: Number;
  prodData: [{
    id: Number,
    incart: Number
  }]
}