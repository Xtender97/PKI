import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrowlService {

  constructor() { }

  growl: any;

  setGrowl(growl: any) {
    this.growl = growl;

  }

  addMessage(type, title, message) {
    let msg = {
      type: type,
      message: message,
      title: title
    };
    this.growl.messages.push(msg);
    setTimeout(() => {
      this.growl.messages.shift();
    }, 3000)
  }
}
