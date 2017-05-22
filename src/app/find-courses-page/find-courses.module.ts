import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MdSelectModule } from '@angular/material';

import { FindCoursesRoutes } from './find-courses.routing';

import { FindCoursesService } from './find-courses.service';

import { FindCoursesComponent } from './find-courses.component';
import { FiltersComponent } from './filters/filters.component';
import { UpcomingCoursesComponent } from './upcoming-courses/upcoming-courses.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FindCoursesRoutes),
    MdSelectModule
  ],
  declarations: [
    FindCoursesComponent,
    FiltersComponent,
    UpcomingCoursesComponent
  ],
  providers: [
    FindCoursesService
  ]
})
export class FindCoursesModule { }
