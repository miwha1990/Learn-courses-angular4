import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Input() filtersCoursesData;
  @Input() filtersLocationsData;
  timeToHideText = false;
  @Input() categoriesListData;
  @Output() filterCoursesEmit = new EventEmitter();
  @Output() changeCategoryEmit = new EventEmitter();
  @Output() hideTextEmit = new EventEmitter();
  @Input() categoryId;
  courseId = '';
  locationId = '';


  filterCourses() {
    const filterParams = {
      category_id: this.categoryId,
      course_id: this.courseId,
      location_id: this.locationId
    };
    this.filterCoursesEmit.emit(filterParams);
  }


  changeCategory() {
    this.courseId = '';
    this.locationId = '';
    console.log('this.categoryId', this.categoryId);
    this.changeCategoryEmit.emit(this.categoryId);
  }
  hideText() {
    if (!this.timeToHideText) {
      this.hideTextEmit.emit(this.timeToHideText = true);
    }
  }
}
