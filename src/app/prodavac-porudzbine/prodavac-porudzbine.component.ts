import { Component, OnInit } from '@angular/core';
import { GrowlService } from '../services/growl.service';

@Component({
  selector: 'app-prodavac-porudzbine',
  templateUrl: './prodavac-porudzbine.component.html',
  styleUrls: ['./prodavac-porudzbine.component.scss']
})
export class ProdavacPorudzbineComponent implements OnInit {

  constructor(
    private growlService: GrowlService
  ) { }

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

  ngOnInit(): void {
  }

  addInfo(action, order){
    this.growlService.addMessage('info', `Uspesno ${action} porudzbina!`, "");
    this.orders = this.orders.filter(item => item != order);
  }

}
