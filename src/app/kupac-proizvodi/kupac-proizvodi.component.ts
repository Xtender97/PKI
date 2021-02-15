import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-kupac-proizvodi',
  templateUrl: './kupac-proizvodi.component.html',
  styleUrls: ['./kupac-proizvodi.component.scss']
})
export class KupacProizvodiComponent implements OnInit {

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) { }

  products:any[];

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  goToDetails(product){
    this.productsService.setSelectedProduct(product);
    this.router.navigate(['detalji']);
  }


}
