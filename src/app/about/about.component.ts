import { Component } from '@angular/core';
import { DataService } from '../shared/data.service'

@Component({
  selector: 'me-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent  {

  private info : any;

  constructor( private dataService : DataService) {
       this.info = dataService.getAboutInformation();
   }



}
