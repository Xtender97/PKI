import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any [] = [
    {
      ime: 'Livadki med',
      cena: '1500',
      url: '../../assets/honey1.jpg',
      opis: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel velit laudantium sed
      tempora saepe. Ipsa obcaecati reprehenderit unde temporibus amet ullam, impedit deserunt, omnis maxime, iste
      repudiandae accusantium totam?`,
      nacinKor: ''
    },
    {
      ime: 'Bagremov med',
      cena: '2000',
      url: '../../assets/honey2.jpg',
      opis: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel velit laudantium sed
      tempora saepe. Ipsa obcaecati reprehenderit unde temporibus amet ullam, impedit deserunt, omnis maxime, iste
      repudiandae accusantium totam?`,
      nacinKor: ''
    },
    {
      ime: 'Crni med',
      cena: '2500',
      url: '../../assets/honey3.jpg',
      opis: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel velit laudantium sed
      tempora saepe. Ipsa obcaecati reprehenderit unde temporibus amet ullam, impedit deserunt, omnis maxime, iste
      repudiandae accusantium totam?`,
      nacinKor: ''
    },
    {
      ime: 'Zuti med',
      cena: '1800',
      url: '../../assets/honey4.jpg',
      opis: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel velit laudantium sed
      tempora saepe. Ipsa obcaecati reprehenderit unde temporibus amet ullam, impedit deserunt, omnis maxime, iste
      repudiandae accusantium totam?`,
      nacinKor: ''
    },
    {
      ime: 'Med',
      cena: '1000',
      url: '../../assets/honey5.jpg',
      opis: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel velit laudantium sed
      tempora saepe. Ipsa obcaecati reprehenderit unde temporibus amet ullam, impedit deserunt, omnis maxime, iste
      repudiandae accusantium totam?`,
      nacinKor: ''
    },
    {
      ime: 'Med',
      cena: '1000',
      url: '../../assets/honey1.jpg',
      opis: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel velit laudantium sed
      tempora saepe. Ipsa obcaecati reprehenderit unde temporibus amet ullam, impedit deserunt, omnis maxime, iste
      repudiandae accusantium totam?`,
      nacinKor: ''
    },
    {
      ime: 'Med',
      cena: '1000',
      url: '../../assets/honey2.jpg',
      opis: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel velit laudantium sed
      tempora saepe. Ipsa obcaecati reprehenderit unde temporibus amet ullam, impedit deserunt, omnis maxime, iste
      repudiandae accusantium totam?`,
      nacinKor: ''
    },
    {
      ime: 'Med',
      cena: '1000',
      url: '../../assets/honey3.jpg',
      opis: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel velit laudantium sed
      tempora saepe. Ipsa obcaecati reprehenderit unde temporibus amet ullam, impedit deserunt, omnis maxime, iste
      repudiandae accusantium totam?`,
      nacinKor: ''
    },
  ];

  selectedProduct: any;

  constructor() { }

  getProducts() {
    return this.products;
  }


  setSelectedProduct(product) {
    this.selectedProduct = product;
  }

  getSelectedProduct() {
    return this.selectedProduct;
  }

  addProduct(product) {
    this.products.push(product);
  }
}
