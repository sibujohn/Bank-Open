import { Injectable, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../globals/services/common.service';
import { HttpRequestService } from '../globals/services/http-request.service';
import { HttpConfigService } from '../globals/services/http-config.service';

@Injectable()
export class HomeService {
    
    public bookMarks : any = [];
    constructor(private httpConfigService : HttpConfigService, private http :HttpRequestService, private commonService :CommonService) {
        
    }  
    
    @Output() bookMarkChange: EventEmitter<boolean> = new EventEmitter();
    emitBookMarkChange(data):any{
        this.bookMarkChange.emit(data);
    }

    getDataList():any{
        return this.http.getRequest(this.httpConfigService.getDataListUrl);
    }

    getFiltredData(data, filter):any{
        let filtredData = data.filter(item => {
            if(filter.type === 'search'){
                return item.word.toUpperCase().indexOf(filter.value.toUpperCase())>=0
                || item.description.toUpperCase().indexOf(filter.value.toUpperCase())>=0
            }
            else if(filter.type === 'index'){
                return item.word.toUpperCase().startsWith(filter.value.toUpperCase())
            }
            else{
                return true;
            }
        })
        return filtredData;
    }

    addBookMark(data):any{
        if(data){
            let duplicate = this.bookMarks.filter(item => {
                return item.id === data.id;
            });
            if(!duplicate || duplicate.length==0){
                this.bookMarks.push(data);
                this.commonService.saveToStore('bookmarks', this.bookMarks);
                this.emitBookMarkChange(true);
            }
        }
    }

    removeBookMark(data):any{
        if(data){
            this.bookMarks = this.bookMarks.filter(item => {
                return item.id !== data.id;
            });
            this.commonService.saveToStore('bookmarks', this.bookMarks);
            this.emitBookMarkChange(true);
        }
    }

    clearBookMarks():any{
        this.bookMarks = [];
        this.commonService.removeFromStore('bookmarks');
        this.emitBookMarkChange(true);
    }

    getBookMarks():any{
        let bookMarks = this.commonService.getFromStore('bookmarks');
        if(bookMarks && bookMarks.length>0){
            this.bookMarks = bookMarks;
        }
        else{
            this.bookMarks = [];
        }
        return this.bookMarks;
    }

    getBookMarkCount():any{
        return this.bookMarks.length;
    }
    
}
