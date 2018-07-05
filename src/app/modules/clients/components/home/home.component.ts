import { Observable } from 'rxjs';
import { ClientService } from './../../../shared/services/client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from './../../../shared/models/client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public clients$: Observable<any>;
  public showAddComponent = false;
  public ready: boolean = false;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clients$ = this.clientService.getClients();
    this.clients$.subscribe((clients: Client[]) => (this.ready = true));
  }

  cancelClientAdd(): void {
    this.showAddComponent = false;
  }
}
