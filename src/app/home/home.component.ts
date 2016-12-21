import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'me-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  private tileDetails;

  constructor(private dataService : DataService) {
          this.tileDetails = dataService.getHomeData();
   }

}
