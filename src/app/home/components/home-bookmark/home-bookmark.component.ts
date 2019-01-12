import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';

@Component({
    selector: 'home-bookmark',
    templateUrl: './home-bookmark.component.html',
    styleUrls: ['./home-bookmark.component.scss']
})
export class HomeBookmarkComponent implements OnInit, OnDestroy{

    public bookMarks : any = [];
    public bookMarkChangeSubscription : any;

    constructor( public router: Router, public homeService : HomeService) {

    }

    ngOnInit() {
        this.getBookMarks();
        this.bookMarkChangeSubscription = this.homeService.bookMarkChange.subscribe(change => {
            this.getBookMarks();
        });
    }

    ngOnDestroy() {
        this.bookMarkChangeSubscription.unsubscribe();
    }

    getBookMarks():any{
        this.bookMarks = this.homeService.getBookMarks();
    }

    removeBookMark(data):any{
        this.homeService.removeBookMark(data);
    }

    clearBookMarks():any{
        this.homeService.clearBookMarks();
    }

}