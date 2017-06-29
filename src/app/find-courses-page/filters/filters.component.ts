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
  @Input() categoriesListArray;
  @Output() filterCoursesEmit = new EventEmitter();
  @Output() changeCategoryEmit = new EventEmitter();
  @Output() hideTextEmit = new EventEmitter();
  @Input() categoryId;
  courseId;
  locationId;
  @Input() filtersCoursesArray;
  @Input() filtersLocationsArray;

  filterCourses() {
    const filterParams = {};
    // console.log(this.categoryId, this.courseId, this.locationId);
    if (!this.categoryId) {
      filterParams['category_id'] = '';
    } else {
      filterParams['category_id'] = this.categoryId[0].id;
    }
    if (!this.courseId) {
      filterParams['course_id'] = '';
    } else {
      filterParams['course_id'] = this.courseId[0].id;
    }
    if (!this.locationId ) {
      filterParams['location_id'] = '';
    } else {
      filterParams['location_id'] = this.locationId[0].id;
    }
    this.filterCoursesEmit.emit(filterParams);
  }


  changeCategory() {
    this.courseId = '';
    this.locationId = '';
   // console.log('this.categoryId', this.categoryId[0].id);
    this.changeCategoryEmit.emit(this.categoryId[0].id);
  }

  fhideText() {
    if (!this.timeToHideText) {
      this.hideTextEmit.emit(this.timeToHideText = true);
    }
  }

}
