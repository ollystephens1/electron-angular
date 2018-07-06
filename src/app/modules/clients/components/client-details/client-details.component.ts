import { Client } from './../../../shared/models/client';
import { ClientService } from './../../../shared/services/client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  public client: Client;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.client = this.route.snapshot.data.client;
  }

  save() {
    this.clientService.updateClient(this.client).subscribe((client: Client) => {
      this.client = client;
    });
  }

  delete() {}
}
