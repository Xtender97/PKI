import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { GrowlService } from '../services/growl.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-kupac-detalji-proizvoda',
  templateUrl: './kupac-detalji-proizvoda.component.html',
  styleUrls: ['./kupac-detalji-proizvoda.component.scss']
})
export class KupacDetaljiProizvodaComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private growlService: GrowlService,
    private productsService: ProductsService
    ) { }

  imgUrl: string = '';
  name: string = '';
  cena: string = '';
  kolicina: string = '';

  product: any;

  ngOnInit(): void {
    // this.imgUrl = this.activatedRoute.snapshot.queryParams.imgUrl;
    // this.name = this.activatedRoute.snapshot.queryParams.name;
    // this.cena = this.activatedRoute.snapshot.queryParams.cena;
    this.product = this.productsService.getSelectedProduct();
  }

  addToCart() {
    console.log(this.product);
    this.cartService.addProduct({imgUrl:this.product.url, name:this.product.ime, cena:this.product.cena, kolicina:this.kolicina});
    this.growlService.addMessage('success', 'Dodato u korpu', this.name + ' dodat u korpu!');
  }
}
