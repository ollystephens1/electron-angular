import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ClientService {
  constructor(private http: HttpClient) {}

  getClients(): Observable<any> {
    return this.http.get('./assets/mock/clients.json');
  }
}
