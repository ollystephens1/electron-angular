import { Client } from './../models/client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class ClientService {
  constructor(private apiService: ApiService) {}

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

  getClient(id: string): Observable<Client> {
    return this.apiService.request({ url: `clients/${id}` });
  }

  updateClient(client: Client): Observable<Client> {
    return this.apiService.request({
      method: 'put',
      url: 'clients',
      body: client
    });
  }

  delete(id: string): Observable<any> {
    return this.apiService.request({ url: `clients/${id}`, method: 'delete' });
  }
}
