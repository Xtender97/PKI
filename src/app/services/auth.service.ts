import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  user: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private router: Router
  ) { }

  users: any = [{
    username: 'kupac',
    password: 'kupac',
    tip: 'kupac', 
    ime: 'kupac', 
    prezime: 'kupac',
    brojTelefona: 'br tel',
    adresa: 'adresa'

  },
  {
    username: 'prodavac',
    password: 'prodavac',
    tip: 'prodavac',
    ime: 'prodavac',
    prezime: 'prodavac',
    brojTelefona: 'br tel',
    adresa: 'adresa'
  }
  ];

  loggedIn: boolean = false;
  userType: string;
  loggedInUser: any;

  getUser() {
    return this.loggedInUser;
  }

  getUserAsObservable() {
    return this.user.asObservable();
  }

  initAuthentication() {
    let usersFromLocalStorage = window.localStorage.getItem('users');
    if(!usersFromLocalStorage){
      window.localStorage.setItem('users', JSON.stringify(this.users));
    } else {
      this.users = JSON.parse(usersFromLocalStorage);
      console.log('postavio sam korisnike na', this.users);
    }
  }

  register(user) {
    this.users.push(user);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    window.localStorage.setItem('users', JSON.stringify(this.users));
  }

  login(username, password) {
    let user = this.users.find(user => user.username === username);
    if (user) {
      if (password === user.password) {
        this.loggedIn = true;
        this.userType = user.tip;
        this.loggedInSubject.next(this.userType);
        this.loggedInUser = user;
        console.log('evo me', this.loggedInUser);
        this.user.next(this.loggedInUser);
        return this.userType;
      }
    } else {
      return null;
    }
  }

  logout() {
    this.loggedIn = false;
    this.userType = null;
    this.loggedInSubject.next('');
    this.router.navigate(['login']);
  }

  getStatusAsObservable() {
    return this.loggedInSubject.asObservable();
  }

  editUser(user) {
    window.localStorage.setItem('users', JSON.stringify(this.users));
  }
}
