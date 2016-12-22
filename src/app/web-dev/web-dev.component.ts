import { Component} from '@angular/core';
import { DataService } from '../shared/data.service'

@Component({
  selector: 'me-web-dev',
  templateUrl: './web-dev.component.html',
  styles: []
})
export class WebDevComponent {
   private webData;
   private info ;
  constructor( private dataService : DataService) {
      this.webData = dataService.getWebData();

      this.info = dataService.getWebDevInformation();
  }

}
