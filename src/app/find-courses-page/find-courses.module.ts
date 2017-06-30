import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MdSelectModule, MdButtonModule } from '@angular/material';

import { UpcomingCoursesModule } from '../upcoming-courses/upcoming-courses.module';

import { FindCoursesRoutes } from './find-courses.routing';
import { FindCoursesService } from './find-courses.service';

import { FindCoursesComponent } from './find-courses.component';
import { FiltersComponent } from './filters/filters.component';
import { CoursesCategoriesComponent } from './courses-categories/courses-categories.component';
import { SelectModule } from 'ng2-select';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FindCoursesRoutes),
    MdSelectModule,
    UpcomingCoursesModule,
    MdButtonModule,
    FormsModule,
    SelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    FindCoursesComponent,
    FiltersComponent,
    CoursesCategoriesComponent,
    // PolymerElement('paper-input'),
    // PolymerElement('paper-item'),
    // PolymerElement('paper-listbox'),
    // PolymerElement('paper-dropdown-menu')
  ],
  providers: [
    FindCoursesService
  ]
})
export class FindCoursesModule { }
