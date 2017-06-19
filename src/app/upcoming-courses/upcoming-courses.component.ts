import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-upcoming-courses',
  templateUrl: './upcoming-courses.component.html',
  styleUrls: ['./upcoming-courses.component.scss']
})
export class UpcomingCoursesComponent {
  @Input() upcomingCoursesData;
  @Input() additionalInfo: boolean = false;
  @Input() textMessage: string;
}
