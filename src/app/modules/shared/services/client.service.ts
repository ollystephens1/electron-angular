import { Client } from './../models/client';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class ClientService {
  constructor(private http: HttpClient, private apiService: ApiService) {}

  getClients(): Observable<Client[]> {
    return this.apiService.request({ url: 'clients' });
  }

  addClient(client: Client): Observable<any> {
    return this.apiService.request({
      url: 'clients',
      method: 'post',
      body: client
    });
  }
}
