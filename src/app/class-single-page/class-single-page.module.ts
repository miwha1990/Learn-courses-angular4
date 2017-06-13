import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StickyModule } from 'ng2-sticky-kit/ng2-sticky-kit';
import { ClassSinglePageComponent } from './class-single-page.component';

import { ClassSinglePageRoutes} from './class-single-page.routing';

import { GetClassDataService } from './get-class-data.service';
import { StickyCardComponent } from './sticky-card/sticky-card.component';
import { UpcomingCoursesModule } from '../upcoming-courses/upcoming-courses.module';
import { SafeResourceUrlModule } from '../shared/safe-resourse-url/safe-resource-url.module';
import { SanitizeHtmlModule } from '../shared/sanitize-html/sanitize-html.module';
import { MarkdownModule } from 'angular2-markdown';
import { SafeResourceUrlPipe } from '../shared/safe-resourse-url/safe-resource-url.pipe';
import {GoogleMapsModule} from 'google-maps-angular2/dist/src/app/google-maps.module';
import {GoogleMapsService} from 'google-maps-angular2/dist/src/app/google-maps.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ClassSinglePageRoutes),
    StickyModule,
    UpcomingCoursesModule,
    SafeResourceUrlModule,
    SanitizeHtmlModule,
    MarkdownModule,
    GoogleMapsModule.forRoot({
      url: 'https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyBOvCGpfetHTFZPjOa6U-UhRHHS-6OeGhU'
    }),
  ],
  declarations: [
    ClassSinglePageComponent,
    StickyCardComponent,
  ],
  providers: [
    GetClassDataService,
    SafeResourceUrlPipe,
    GoogleMapsService,
  ],
})
export class ClassSinglePageModule { }



