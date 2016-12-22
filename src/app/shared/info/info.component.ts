import { Component , Input} from '@angular/core';

@Component({
  selector: 'me-info',
  templateUrl: './info.component.html',
  styles: []
})
export class InfoComponent  {
  @Input() info : any;

  }
