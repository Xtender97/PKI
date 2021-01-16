import { Component, OnInit } from '@angular/core';
import { GrowlService } from '../services/growl.service';

@Component({
  selector: 'app-new-proizvod',
  templateUrl: './new-proizvod.component.html',
  styleUrls: ['./new-proizvod.component.scss']
})
export class NewProizvodComponent implements OnInit {

  constructor(
    private growlService: GrowlService
  ) { }

  ngOnInit(): void {
  }

  addItem(){
    this.growlService.addMessage('success', 'Uspesno dodat nov proizvod!', '');
  }

}
