import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { GrowlService } from '../services/growl.service';

@Component({
  selector: 'app-kupac-detalji-proizvoda',
  templateUrl: './kupac-detalji-proizvoda.component.html',
  styleUrls: ['./kupac-detalji-proizvoda.component.scss']
})
export class KupacDetaljiProizvodaComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private growlService: GrowlService
  ) { }

  imgUrl: string = '';
  name: string = '';
  cena: string = '';
  kolicina: string = '';


  ngOnInit(): void {
    this.imgUrl = this.activatedRoute.snapshot.queryParams.imgUrl;
    this.name = this.activatedRoute.snapshot.queryParams.name;
    this.cena = this.activatedRoute.snapshot.queryParams.cena;
  }

  addToCart() {
    console.log(this.kolicina);
    this.cartService.addProduct({imgUrl:this.imgUrl, name:this.name, cena:this.cena, kolicina:this.kolicina});
    this.growlService.addMessage('success', 'Dodato u korpu', this.name + ' dodat u korpu!');
  }
}
