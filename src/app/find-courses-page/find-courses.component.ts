import { Component, OnInit } from '@angular/core';

import { FindCoursesService } from './find-courses.service';

@Component({
  selector: 'app-find-courses',
  templateUrl: './find-courses.component.html',
  styleUrls: ['./find-courses.component.scss']
})
export class FindCoursesComponent implements OnInit {
  upcomingCoursesData;
  categoriesListData;
  filtersParamsData;
  loading: boolean = false;


  constructor(private findCoursesService: FindCoursesService) { }


  ngOnInit() {
    this.getUpcomingCourses();
    this.getCategoriesList();
    this.getFiltersParams();
  }


  getUpcomingCourses(params?) {
    this.loading = true;
    this.findCoursesService.getUpcomingCourses(params)
      .subscribe(
        data => this.upcomingCoursesData = data,
        err => console.error('ERROR', err),
        () => this.loading = false
      )
  }
  

  getCategoriesList() {
    this.findCoursesService.getCategoriesList()
      .subscribe(
        data => this.categoriesListData = data,
        err => console.error('ERROR', err)
      )
  }


  getFiltersParams() {
    this.findCoursesService.getFiltersParams()
      .subscribe(
        data => this.filtersParamsData = data,
        err => console.error('ERROR', err)
      )
  }

}
