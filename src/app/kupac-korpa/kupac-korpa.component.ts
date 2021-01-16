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
      let acctulaPrice:any  = product.cena.slice(0, product.cena.length - 3);
      acctulaPrice *= +product.kolicina;
      product.cena = acctulaPrice.toString(10);
      return product;
    })
    this.priceSum = this.products.reduce((acc, product) => acc+= +product.cena ,0)
  }

  order(){
    this.cartService.emptyCart();
    this.products = [];
    this.priceSum = 0;
    this.growlService.addMessage('success', 'Porudzbena uspesna!', '');
    this.router.navigate(['kupac']);
  }

}
