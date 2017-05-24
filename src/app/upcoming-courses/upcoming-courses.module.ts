import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcomingCoursesComponent } from './upcoming-courses.component';
import { RouterModule} from '@angular/router';
import { GetUpcomingCoursesService } from './get-upcoming-courses.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [UpcomingCoursesComponent],
  exports: [UpcomingCoursesComponent],
  providers: [GetUpcomingCoursesService]
})
export class UpcomingCoursesModule { }
