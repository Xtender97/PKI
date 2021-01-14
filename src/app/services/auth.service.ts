import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    private router: Router
  ) { }

  users:any = {
    kupac: 'kupac', 
    prodavac: 'prodavac'
  }
  
  loggedIn: boolean = false;
  userType:string;

  login(username, password) {
    let user = this.users[username];
    if(user) {
      if (password === user) {
        this.loggedIn = true;
        this.userType = username;
        this.loggedInSubject.next(this.userType);
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

}
