import { ApiService } from './../modules/shared/services/api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private apiService: ApiService) {}

  isLoggedIn(): boolean {
    return false;
  }

  login({ email = '', password = '' } = {}): Observable<any> {
    return this.apiService.request({
      method: 'post',
      url: 'login',
      body: { email, password }
    });
  }
}
