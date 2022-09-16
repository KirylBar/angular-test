import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardHead',
  templateUrl: './cardHead.component.html',
})
export class CardHeadComponent {
  @Input() length: number;
}
