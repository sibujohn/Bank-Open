import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';

@Component({
    selector: 'home-list',
    templateUrl: './home-list.component.html',
    styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit{

    public alphabets : any = "abcdefghijklmnopqrstuvwxyz".split("");
    public filterParams : any = {};
    public dataList : any = [];
    public filteredList : any = [];
    public searchValue : any = null;
    public selectedIndex : any = null;

    constructor( public router: Router, public homeService : HomeService) {

    }

    ngOnInit() {
        this.filterParams = {
            type:null,
            value:null
        }
        this.getDataList();
    }

    getDataList():any{
        this.homeService.getDataList()
        .subscribe(
          response => {
            if(response.data){
                this.dataList = response.data;
                this.getFiltredData();
            }
          },
          error => {

          }
        );
    }

    getIndexedData(index):any{
        this.selectedIndex = index;
        this.searchValue = null;
        this.filterParams = {
            type:'index',
            value:this.selectedIndex
        }
        this.getFiltredData();
    }

    getSearchData():any{
        this.selectedIndex = null;
        this.filterParams = {
            type:'search',
            value:this.searchValue
        }
        this.getFiltredData();
    }

    addNewWord():any{

    }

    addBookMark(data):any{
        this.homeService.addBookMark(data);
    }

    getFiltredData():any{
        this.filteredList = this.homeService.getFiltredData(this.dataList, this.filterParams);
    }

}