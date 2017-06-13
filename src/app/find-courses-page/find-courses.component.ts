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
  allLocations;
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
    if (params) this.additionalInfo = true;

    this.loading = true;
    this.findCoursesService.getUpcomingCourses(params)
      .subscribe(
        data => this.upcomingCoursesData = data,
        err => console.error('ERROR', err),
        () => {
          this.loading = false;

          // if(params && params.category_id && !params.course_id) {
          //   console.log('PARAMS', params);
            
          //   this.filtersParamsData.coursesList = [];
          //   for(let course of this.upcomingCoursesData) {
          //     const courseItem = {
          //       name: course.name,
          //       id: course.id,
          //       category_id: params.category_id
          //     };
          //     this.filtersParamsData.coursesList.push(courseItem);
          //   }
          // }
          
          

  

        }
      );
  }

  getCategoriesList() {
    this.findCoursesService.getCategoriesList()
      .subscribe(
        data => {
          this.categoriesListData = data;
        },
        err => console.error('ERROR', err)
      );
  }


  getFiltersParams(categoryId?) {
    console.log('categoryId?', categoryId);
    
    this.findCoursesService.getFiltersParams(categoryId)
      .subscribe(
        data => this.filtersParamsData = data,
        err => console.error('ERROR', err)
      );
  }


  selectedCategory(category) {
    const filterParams = { category_id: category.id }
    this.categoryId = category.id;
    this.getUpcomingCourses(filterParams);
  }
}
