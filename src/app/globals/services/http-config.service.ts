import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class HttpConfigService {
    // Base Config
    readonly baseUrl : string = environment.apiUrl;
    readonly getDataListUrl : string = 'assets/data.json'
    
    constructor() { }

}