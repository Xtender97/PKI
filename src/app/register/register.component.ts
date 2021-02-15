import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  user: {
    ime: string,
    prezime: string,
    adresa: string,
    brojTelefona: string,
    username: string,
    password: string,
    tip: string
  } = {
      ime: '',
      prezime: '',
      adresa: '',
      brojTelefona: '',
      username: '',
      password: '',
      tip: ''
    };


  ngOnInit(): void {

  }

  register() {
    this.authService.register(this.user);
    this.router.navigate(['/login']);
  }

}
