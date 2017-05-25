import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomepageService } from './homepage.service';

import { HomepageStaticInfoComponent } from './homepage-static-info/homepage-static-info.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomePageComponent } from './home-page.component';
import { UpcomingCoursesModule } from '../upcoming-courses/upcoming-courses.module';
import { MdButtonModule, MdInputModule } from '@angular/material';


import { HomePageRoutes } from './homepage.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomePageRoutes),
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdInputModule,
    UpcomingCoursesModule
  ],
  declarations: [
    HomepageStaticInfoComponent,
    CarouselComponent,
    HomePageComponent
  ],
  providers: [
    HomepageService
  ],
})
export class HomepageModule { }
