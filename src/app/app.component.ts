import { Component, OnInit } from '@angular/core';
import { CommonService } from './globals/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'UI';
  
  constructor(public commonService : CommonService){

  }
  ngOnInit() {
    
  }
}
