import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { HomeListComponent } from './components/home-list/home-list.component';
import { HomeBookmarkComponent } from './components/home-bookmark/home-bookmark.component';

import { HomeService } from './home.service';
import { ServicesModule } from '../globals/modules/services.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    ServicesModule
  ],
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeListComponent,
    HomeBookmarkComponent
  ],
  providers:[
    HomeService
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
