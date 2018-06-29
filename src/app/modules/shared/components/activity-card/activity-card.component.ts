import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css']
})
export class ActivityCardComponent implements OnInit {
  @Input() activity;

  constructor() {}

  ngOnInit() {}
}
