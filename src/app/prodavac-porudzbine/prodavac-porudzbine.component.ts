import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { GrowlService } from '../services/growl.service';

@Component({
  selector: 'app-prodavac-porudzbine',
  templateUrl: './prodavac-porudzbine.component.html',
  styleUrls: ['./prodavac-porudzbine.component.scss']
})
export class ProdavacPorudzbineComponent implements OnInit {

  constructor(
    private growlService: GrowlService,
    private cartService: CartService,
  ) { }

  orders: any[];
 

  ngOnInit(): void {
    this.orders = this.cartService.getOrders();
  }

  addInfo(action, order){
    this.growlService.addMessage('info', `Uspesno ${action} porudzbina!`, "");
    this.orders = this.cartService.removeOrder(order);
  }

}
