import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { ClientService } from '../../shared/services/client.service';
import { Client } from './../../shared/models/client';

@Injectable()
export class ClientResolver implements Resolve<Client> {
  constructor(private clientService: ClientService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Client> {
    return this.clientService.getClient(route.params['id']);
  }
}
