import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  products: {
    imgUrl: string,
    name: string,
    cena: string,
    kolicina: string
  }[] = [];

  notEmptyCart: BehaviorSubject<number> = new BehaviorSubject<number>(0);


  addProduct(product){
    this.products.push(product);
    this.notEmptyCart.next(this.products.length);
  }

  emptyCart(){
    this.products = [];
    this.notEmptyCart.next(0);
  }

  notEmptyCartAsObservable(){
    return this.notEmptyCart.asObservable();
  }

  getProducts(){
    return this.products;
  }
}
