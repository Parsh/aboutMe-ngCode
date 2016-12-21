import { Component, Input } from '@angular/core';

@Component({
  selector: 'me-home-tile',
  templateUrl: './home-tile.component.html',
  styles: []
})
export class HomeTileComponent  {

 @Input() private details: any ;

}
