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

  orders: {
    items: {
      kolicina: string,
      name: string,
      cena: string
    }[],
    sum: string
  }[] =
    [
      {
        items: [
          { kolicina: '1', name: 'Livadski med', cena: '1500' },
          { kolicina: '1', name: 'Bagremov med', cena: '2000' }

        ],
        sum: '3500'
      }, 
      {
        items: [
          { kolicina: '1', name: 'Livadski med', cena: '1500' },
        ],
        sum: '1500'
      }
    ];

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

  saveOrder(order) {
    this.orders.push(order);
  }

  getOrders() {
    return this.orders;
  }

  removeOrder(order) {
    this.orders = this.orders.filter(item => item != order);
    return this.orders;
  }
}
