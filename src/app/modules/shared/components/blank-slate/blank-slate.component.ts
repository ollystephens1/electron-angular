import { Component, Input } from '@angular/core';

@Component({
  selector: 'blank-slate',
  template: `
    <div *ngIf="show"
      class="notification has-text-centered"
      [ngClass]=" {
        'fa-2x': size === 'sm',
        'fa-3x': size === 'md',
        'fa-4x': size === 'lg',
        'fa-5x': size === 'xl'
      }">
      <i *ngIf="icon" class="fa" [ngClass]="icon"></i>
      <p>{{ message }}</p>
    </div>
  `
})
export class BlankSlateComponent {
  @Input() show: boolean = false;
  @Input() message: string;
  @Input() size: string = 'sm';
  @Input() icon: string;

  constructor() {}
}
