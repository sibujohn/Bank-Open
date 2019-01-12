import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router, private homeService : HomeService) {
    
  }
  
  ngOnInit() {
    
  }
}