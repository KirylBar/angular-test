import { Component, Input } from '@angular/core';
import { TypeUser } from '../../models/userData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() users: TypeUser[];
}
