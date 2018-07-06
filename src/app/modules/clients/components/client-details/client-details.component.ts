import { Client } from './../../../shared/models/client';
import { ClientService } from './../../../shared/services/client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  public client: Client;
  public showDeleteConfirm: boolean = false;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.client = this.route.snapshot.data.client;
  }

  save(): void {
    this.clientService.updateClient(this.client).subscribe((client: Client) => {
      this.client = client;
    });
  }

  delete(): void {
    this.clientService.delete(this.client._id).subscribe(response => {
      this.router.navigate(['/clients']);
    });
  }

  toggleDeleteConfirm() {
    this.showDeleteConfirm = !this.showDeleteConfirm;
  }
}
