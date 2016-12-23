import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service'

@Component({
  selector: 'me-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit{
  private tileDetails;

  constructor(private dataService : DataService) { }

  ngOnInit(){
      this.dataService.getHomeData().subscribe(
          (data:any) =>  this.tileDetails = data
          )
  }
}
