import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router
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
    this.router.navigate(['/login']);
  }

}
