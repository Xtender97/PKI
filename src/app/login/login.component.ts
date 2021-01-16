import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { GrowlService } from '../services/growl.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private growlService: GrowlService,
  ) { }

  ngOnInit(): void {
  }

  username:string;
  password:string;
  loggedInType:string;

  login(){
   this.loggedInType = this.authService.login(this.username, this.password);
   if (this.loggedInType) {
    this.router.navigate([this.loggedInType]);
   }
   else {
    this.growlService.addMessage('error', 'Invalid credentials', '');
   }
  }

}
