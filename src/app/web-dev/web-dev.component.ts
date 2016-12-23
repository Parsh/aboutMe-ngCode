import { Component , OnInit} from '@angular/core';
import { DataService } from '../shared/data.service'

@Component({
  selector: 'me-web-dev',
  templateUrl: './web-dev.component.html',
  styles: []
})
export class WebDevComponent implements OnInit{
   private info ;
  constructor( private dataService : DataService) {}

  ngOnInit(){

      this.dataService.getWebDevInformation().subscribe(
        (data:any) =>   this.info = data
      )
  }

}
