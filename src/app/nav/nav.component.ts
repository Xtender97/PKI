import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) { }

  status:string = '';
  numberOfProducts: string = '';

  ngOnInit(): void {
    this.authService.getStatusAsObservable().subscribe(
      (status) => this.status = status
    );

    this.cartService.notEmptyCartAsObservable().subscribe(
      (numberOfProducts) => this.numberOfProducts = numberOfProducts.toString(10)
    );
  }

  logout() {
    this.authService.logout();
  }

}
