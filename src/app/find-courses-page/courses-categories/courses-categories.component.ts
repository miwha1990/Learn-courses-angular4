import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses-categories',
  templateUrl: './courses-categories.component.html',
  styleUrls: ['./courses-categories.component.scss']
})
export class CoursesCategoriesComponent {
  @Input() categoriesListData;
  @Input() upcomingCoursesData;
  @Output() selectedCategory = new EventEmitter();

  onSelectedCategory(i: number) {
    this.selectedCategory.emit(this.categoriesListData[i]);
  }
}