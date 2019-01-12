import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';

@Component({
    selector: 'home-header',
    templateUrl: './home-header.component.html',
    styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit, OnDestroy{

    public bookMarkCount : any = 0;
    public bookMarkChangeSubscription : any;
    constructor( public router: Router, public homeService : HomeService) {

    }

    ngOnInit() {        
        this.getBookMarkCount();
        this.bookMarkChangeSubscription = this.homeService.bookMarkChange.subscribe(change => {
            this.getBookMarkCount();
        });
    }

    ngOnDestroy() {
        this.bookMarkChangeSubscription.unsubscribe();
    }

    getBookMarkCount():any{
        this.bookMarkCount = this.homeService.getBookMarkCount();
    }

}