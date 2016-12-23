import { Component , OnInit} from '@angular/core';
import { DataService } from '../shared/data.service'

@Component({
  selector: 'me-mland-ai',
  templateUrl: './mland-ai.component.html',
  styles: []
})
export class MLandAIComponent implements OnInit{
  private mlData;
  private info;

  constructor( private dataService : DataService ) {}

  ngOnInit(){
      this.dataService.getMLData().subscribe(
        (data:any) => this.mlData = data
      );

      this.dataService.getMLInformation().subscribe(
        (data:any) => this.info = data
      )
  }
}
