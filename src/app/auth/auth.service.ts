import { ApiService } from './../modules/shared/services/api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  login({ email = '', password = '' } = {}): Observable<any> {
    return this.apiService.request({
      method: 'post',
      url: 'login',
      body: { email, password }
    }).pipe((map(response => {
      // Store user and Token in localStorage
      if (response && response.token) {
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.router.navigate(['/']);
      }
      return response;
    })));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  getCurrentUser() {
    if (this.isLoggedIn) {
      const store = JSON.parse(localStorage.getItem('currentUser'));
      if (store) {
        return store.user;
      }
    }
    return false;
  }

  register({ name = '', email = '', password = '', phone = '' } = {}): Observable<any> {
    return this.apiService.request({
      method: 'post',
      url: 'users',
      body: { name, email, password, phone }
    });
  }
}
