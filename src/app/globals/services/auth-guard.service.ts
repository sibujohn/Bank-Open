import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { CommonService } from './common.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private router: Router, private commonService : CommonService) {}

    canActivate() {
        return true;
    }
}
