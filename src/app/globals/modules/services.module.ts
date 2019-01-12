import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { HttpRequestService } from '../services/http-request.service';
import { HttpConfigService } from '../services/http-config.service';
import { CommonService } from '../services/common.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
      
  ],
  exports: [
      
  ],
  providers: [
    HttpRequestService,
    HttpConfigService,
    CommonService
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ServicesModule { }
