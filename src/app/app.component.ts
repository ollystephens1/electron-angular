import { User } from './modules/shared/models/user';
import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'app';
  public showNav = true;
  public currentUser: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  public logout(): void {
    this.authService.logout();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
