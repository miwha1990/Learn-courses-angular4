import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MdSelectModule } from '@angular/material';

import { UpcomingCoursesModule } from '../upcoming-courses/upcoming-courses.module'

import { FindCoursesRoutes } from './find-courses.routing';

import { FindCoursesService } from './find-courses.service';

import { FindCoursesComponent } from './find-courses.component';
import { FiltersComponent } from './filters/filters.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FindCoursesRoutes),
    MdSelectModule,
    UpcomingCoursesModule
  ],
  declarations: [
    FindCoursesComponent,
    FiltersComponent
  ],
  providers: [
    FindCoursesService
  ]
})
export class FindCoursesModule { }
