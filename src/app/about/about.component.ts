import { Component , OnInit } from '@angular/core';
import { DataService } from '../shared/data.service'

@Component({
  selector: 'me-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  private info;

  constructor( private dataService : DataService) { }

  ngOnInit(){
      this.dataService.getAboutInformation().subscribe(
          (data:any) =>  this.info = data
          )
  }


}
