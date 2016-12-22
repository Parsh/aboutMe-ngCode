import { Component , Input} from '@angular/core';

@Component({
  selector: 'me-divider',
  templateUrl: './divider.component.html',
  styles: []
})
export class DividerComponent  {

@Input() dividerTitle : string ;

}
