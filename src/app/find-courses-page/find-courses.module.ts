import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MdSelectModule, MdButtonModule } from '@angular/material';

import { UpcomingCoursesModule } from '../upcoming-courses/upcoming-courses.module'

import { FindCoursesRoutes } from './find-courses.routing';

import { FindCoursesService } from './find-courses.service';

import { FindCoursesComponent } from './find-courses.component';
import { FiltersComponent } from './filters/filters.component';
import { CoursesCategoriesComponent } from './courses-categories/courses-categories.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FindCoursesRoutes),
    MdSelectModule,
    UpcomingCoursesModule,
    MdButtonModule
  ],
  declarations: [
    FindCoursesComponent,
    FiltersComponent,
    CoursesCategoriesComponent
  ],
  providers: [
    FindCoursesService
  ]
})
export class FindCoursesModule { }
