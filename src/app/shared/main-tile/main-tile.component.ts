import { Component, Input } from '@angular/core';

@Component({
  selector: 'me-main-tile',
  templateUrl: './main-tile.component.html',
  styles: []
})
export class MainTileComponent  {

 @Input() private details: any ;

}
