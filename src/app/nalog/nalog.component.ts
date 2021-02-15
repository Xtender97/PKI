import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { GrowlService } from '../services/growl.service';

@Component({
  selector: 'app-nalog',
  templateUrl: './nalog.component.html',
  styleUrls: ['./nalog.component.scss']
})
export class NalogComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private growlService: GrowlService
  ) { }

  user:any;

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }


  saveUser() {
    this.authService.editUser(this.user);
    this.growlService.addMessage('success', '', 'Successfully changed user information!');
  }
}
