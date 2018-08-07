import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
Injectable()
export class AuthService {

  isLoggedIn(): boolean {
    return false;
  }

  login({ email: string = '', password = '' } = {}): Observable<any> {
    return
  }
}
