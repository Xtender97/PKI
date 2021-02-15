import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { GrowlService } from '../services/growl.service';

@Component({
  selector: 'app-kupac-korpa',
  templateUrl: './kupac-korpa.component.html',
  styleUrls: ['./kupac-korpa.component.scss']
})
export class KupacKorpaComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private router: Router,
    private growlService: GrowlService
  ) { }

  products: {
    imgUrl: string,
    name: string,
    cena: string,
    kolicina: string
  }[] = [];

  priceSum: number;
  
  ngOnInit(): void {
    this.products = this.cartService.getProducts();
    this.products = this.products.map(product => {
      let acctulaPrice:any = product.cena;
      acctulaPrice *= +product.kolicina;
      product.cena = acctulaPrice.toString(10);
      return product;
    })
    this.priceSum = this.products.reduce((acc, product) => acc+= +product.cena ,0)
  }

  order(){
    this.cartService.saveOrder(
      {
        items: this.products.map(product => {
          return {kolicina: product.kolicina, cena: product.cena, name: product.name}}),
        sum: this.products.reduce((sum, product) => sum + +product.cena, 0)
      });
    this.cartService.emptyCart();
    this.products = [];
    this.priceSum = 0;
    this.growlService.addMessage('success', 'Porudzbena uspesna!', '');
    this.router.navigate(['kupac']);
  }

  // {
  //   items: [
  //     { kolicina: '1', name: 'Livadski med', cena: '1500' },
  //     { kolicina: '1', name: 'Bagremov med', cena: '2000' }

  //   ],
  //   sum: '3500'
  // }

}
