import { Component , Input} from '@angular/core';

@Component({
  selector: 'me-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent {

  @Input() cardInfo : any;

}
