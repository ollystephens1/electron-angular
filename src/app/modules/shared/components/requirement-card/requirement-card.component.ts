import { Component, OnInit, Input } from '@angular/core';
import { Requirement } from '../../models';

@Component({
  selector: 'requirement-card',
  templateUrl: './requirement-card.component.html',
  styleUrls: ['./requirement-card.component.css']
})
export class RequirementCardComponent implements OnInit {
  @Input() requirement: Requirement;

  constructor() {}

  ngOnInit(): void {}
}
