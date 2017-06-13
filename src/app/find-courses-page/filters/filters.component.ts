import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Input() filtersParamsData;
  @Input() categoriesListData;
  @Output() filterCoursesEmit = new EventEmitter();
  @Output() changeCategoryEmit = new EventEmitter(); 
  @Input() categoryId = '';
  courseId = '';
  locationId = '';


  filterCourses() {
    let filterParams = {
      category_id: this.categoryId,
      course_id: this.courseId,
      location_id: this.locationId
    }
    
    this.filterCoursesEmit.emit(filterParams);
    
  }


  changeCategory() {
    console.log('this.categoryId',this.categoryId);
    
    this.changeCategoryEmit.emit(this.categoryId);
  }
}
