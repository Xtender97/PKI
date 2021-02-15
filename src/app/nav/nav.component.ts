import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { GrowlService } from '../services/growl.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    public growlService: GrowlService,
  ) { }

  status:string = '';
  numberOfProducts: string = '';
  user:any;

  ngOnInit(): void {
    this.authService.initAuthentication();
    this.authService.getStatusAsObservable().subscribe(
      (status) => this.status = status
    );
    this.authService.getUserAsObservable().subscribe(data => {
      this.user = data;
    });
    console.log(this.user);

    this.cartService.notEmptyCartAsObservable().subscribe(
      (numberOfProducts) => this.numberOfProducts = numberOfProducts.toString(10)
    );
  }

  logout() {
    this.authService.logout();
  }

}
