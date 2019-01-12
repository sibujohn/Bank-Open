import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { HttpConfigService } from '../services/http-config.service';
import { CommonService } from '../services/common.service';

@Injectable()
export class HttpRequestService  {

  constructor(private http: HttpClient, private httpConfigService : HttpConfigService, private commonService: CommonService) { }

  getRequest(requestUrl : any) : Observable<any> {
    this.commonService.emitLoaderChange(true);
    return this.http.get(
      this.httpConfigService.baseUrl + requestUrl,
      {
        headers: this.appendAccessDetails()
      }
    ).do(x=>{
      this.commonService.emitLoaderChange(false);
    }).catch((error:any) => {
      this.commonService.emitLoaderChange(false);
      return Observable.throw(error);
    });
  }
 
  postRequest(requestUrl : string, data : any) : Observable<any>{
    this.commonService.emitLoaderChange(true);
    return this.http.post(
      this.httpConfigService.baseUrl+requestUrl,
      data,
      {
        headers: this.appendAccessDetails()
      }
    ).do(x=>{
      this.commonService.emitLoaderChange(false);
    }).catch((error:any) => {
      this.commonService.emitLoaderChange(false);
      return Observable.throw(error);
    });
  }

  appendAccessDetails():any{
    return new HttpHeaders().set('Authorization', 'Bearer ')
  }
}