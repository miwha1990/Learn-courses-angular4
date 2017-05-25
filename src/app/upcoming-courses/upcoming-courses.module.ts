import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcomingCoursesComponent } from './upcoming-courses.component';
import { RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [ UpcomingCoursesComponent ],
  exports: [ UpcomingCoursesComponent ],
  providers: []
})
export class UpcomingCoursesModule { }
