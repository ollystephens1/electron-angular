import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit {
  @Input() client;

  constructor() {}

  ngOnInit() {}
}
