import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HomepageStaticInfoComponent} from './homepage-static-info/homepage-static-info.component';
import {CarouselComponent} from './carousel/carousel.component';
import {GetDataService} from './get-data.service';

import { HomePageRoutes } from './homepage.routing';

import { HomePageComponent } from './home-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomePageRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomepageStaticInfoComponent,
    CarouselComponent,
    HomePageComponent,
  ],
  providers: [GetDataService],
})
export class HomepageModule { }
