import {Component, Input, Output, EventEmitter} from '@angular/core';

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
    const filterParams = {};
    if (!this.categoryId) {
      filterParams['category_id'] = '';
    } else {
      filterParams['category_id'] = this.categoryId;
    }
    if (!this.courseId) {
      filterParams['course_id'] = '';
    } else {
      filterParams['course_id'] = this.courseId;
    }
    if (!this.locationId ) {
      filterParams['location_id'] = '';
    } else {
      filterParams['location_id'] = this.locationId;
    }
    this.filterCoursesEmit.emit(filterParams);
  }


  changeCategory() {
    this.courseId = '';
    this.locationId = '';
    console.log('this.categoryId', this.categoryId);
    this.changeCategoryEmit.emit(this.categoryId);
  }

  fhideText() {
    console.log(this.categoryId);
    if (!this.timeToHideText) {
      this.hideTextEmit.emit(this.timeToHideText = true);
    }
  }

}
