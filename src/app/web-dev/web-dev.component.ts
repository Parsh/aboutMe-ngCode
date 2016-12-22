import { Component} from '@angular/core';
import { DataService } from '../shared/data.service'

@Component({
  selector: 'me-web-dev',
  templateUrl: './web-dev.component.html',
  styles: []
})
export class WebDevComponent {
   private webData;
  constructor( private dataService : DataService) {
      this.webData = dataService.getWebData();
  }

}
