import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class CommonService {

  constructor( ) { }  
    
  @Output() loaderChange: EventEmitter<boolean> = new EventEmitter();
  emitLoaderChange(data):any{
      this.loaderChange.emit(data);
  }

  saveToStore(key:string, data: any):any{
    if(key && data){
      localStorage.setItem(key, JSON.stringify(data));
    }
  }

  getFromStore(key):any{
    if(key){
      let storeData = localStorage.getItem(key);
      if(storeData){
        return JSON.parse(storeData);
      }      
    }
  }

  removeFromStore(key):any{
    if(key){
      localStorage.removeItem(key);
    }
  }

  clearStorage():any{
    localStorage.clear();
  }
  
}
