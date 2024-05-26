import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-container',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  @Input() name?: string;
  @Input() item?: { title?: string, description?: string };

}
