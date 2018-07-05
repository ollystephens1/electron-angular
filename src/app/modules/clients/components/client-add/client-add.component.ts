import { Component, Output, EventEmitter } from '@angular/core';
import { ClientService } from './../../../shared/services/client.service';
import { Client } from './../../../shared/models/client';

@Component({
  selector: 'client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent {
  @Output() onCancel = new EventEmitter();

  public client: Client = new Client();

  constructor(private clientService: ClientService) {}

  save(): void {
    this.clientService.addClient(this.client).subscribe(response => {
      this.cancel();
    });
  }

  cancel(): void {
    this.onCancel.emit();
  }
}
