import { Component, OnInit } from '@angular/core';
import { GrowlService } from '../services/growl.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-new-proizvod',
  templateUrl: './new-proizvod.component.html',
  styleUrls: ['./new-proizvod.component.scss']
})
export class NewProizvodComponent implements OnInit {

  constructor(
    private growlService: GrowlService,
    private productsService: ProductsService
  ) { }

  product = {
    
      ime: 'Med',
      cena: '1000',
      url: null,
      opis: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel velit laudantium sed
      tempora saepe. Ipsa obcaecati reprehenderit unde temporibus amet ullam, impedit deserunt, omnis maxime, iste
      repudiandae accusantium totam?`,
      nacinKor: ''
    
  }

  ngOnInit(): void {
  }

  addItem(){
    // let imageINput = document.getElementById("file-input").files[0];
    // console.log(imageINput);
    this.productsService.addProduct(this.product);
    this.growlService.addMessage('success', 'Uspesno dodat nov proizvod!', '');
  }


  addImg(event) {
    let file: File = event.target.files[0];

    var reader = new FileReader();
    reader.readAsDataURL(file); 
    reader.onloadend = () =>  {
        var base64data = reader.result;                
        console.log(base64data);
        this.product.url = base64data;
    }
  }


}
