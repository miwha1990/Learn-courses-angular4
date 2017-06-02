import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

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
  loading: boolean;
  additionalInfo: boolean;
  categoryId;  

  constructor(private findCoursesService: FindCoursesService,
              private activatedRoute: ActivatedRoute) {

    this.loading = false;
    this.additionalInfo = false;
    this.categoryId = ''; 
  }


  ngOnInit() {
    this.getUpcomingCourses();
    this.getCategoriesList();
    this.getFiltersParams();
  }


  getUpcomingCourses(params?) {
    if(params) this.additionalInfo = true;

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


  selectedCategory(category) {
    const filterParams = { category_id: category.id }
    this.categoryId = category.id;
    this.getUpcomingCourses(filterParams);
  }
  
  
}
