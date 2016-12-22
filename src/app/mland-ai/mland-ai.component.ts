import { Component } from '@angular/core';
import { DataService } from '../shared/data.service'

@Component({
  selector: 'me-mland-ai',
  templateUrl: './mland-ai.component.html',
  styles: []
})
export class MLandAIComponent {
  private mlData: any ;
  constructor( private dataService : DataService ) {
      this.mlData = dataService.getMLData();
  }



}
