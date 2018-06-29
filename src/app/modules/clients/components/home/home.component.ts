import { Observable } from 'rxjs';
import { ClientService } from './../../../shared/services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public clients$: Observable<any>;
  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clients$ = this.clientService.getClients();
  }
}
