import { Component, OnInit } from '@angular/core';
import { GrowlService } from '../services/growl.service';

@Component({
  selector: 'app-growl',
  templateUrl: './growl.component.html',
  styleUrls: ['./growl.component.scss']
})
export class GrowlComponent implements OnInit {

  constructor(
    private growlService: GrowlService
  ) { }

  messages: {
    type: string,
    message: string,
    title: string
  }[] = [];

  ngOnInit(): void {
    this.growlService.setGrowl(this);
  }

  isEmpty(){
    return this.messages.length === 0;
  }

  empty(){
    this.messages = [];
  }

}
