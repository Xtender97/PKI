import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  status:string = '';

  ngOnInit(): void {
    this.authService.getStatusAsObservable().subscribe(
      (status) => this.status = status
    );
  }

  logout() {
    this.authService.logout();
  }

}
