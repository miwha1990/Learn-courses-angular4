import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-courses-categories',
  templateUrl: './courses-categories.component.html',
  styleUrls: ['./courses-categories.component.scss']
})
export class CoursesCategoriesComponent {
  @Input() categoriesListData;
  @Input() upcomingCoursesData;
}
