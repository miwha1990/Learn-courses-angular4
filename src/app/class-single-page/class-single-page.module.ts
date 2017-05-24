import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StickyModule } from 'ng2-sticky-kit/ng2-sticky-kit';
import { AgmCoreModule } from '@agm/core';
import { ClassSinglePageComponent } from './class-single-page.component';

import { ClassSinglePageRoutes} from './class-single-page.routing';

import { GetClassDataService } from './get-class-data.service';
import { StickyCardComponent } from './sticky-card/sticky-card.component';
import { UpcomingCoursesModule } from '../upcoming-courses/upcoming-courses.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ClassSinglePageRoutes),
    StickyModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBOvCGpfetHTFZPjOa6U-UhRHHS-6OeGhU'
    }),
    UpcomingCoursesModule,
  ],
  declarations: [
    ClassSinglePageComponent,
    StickyCardComponent,
  ],
  providers: [
    GetClassDataService,
  ],
})
export class ClassSinglePageModule { }



