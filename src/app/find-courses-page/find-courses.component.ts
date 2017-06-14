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
  filtersCoursesData;
  filtersLocationsData;
  allLocations;
  loading: boolean;
  additionalInfo: boolean;
  categoryId;
  fullLocationsList;
  constructor(private findCoursesService: FindCoursesService,
              private activatedRoute: ActivatedRoute) {

    this.loading = false;
    this.additionalInfo = false;
    this.categoryId = '';
  }


  ngOnInit() {
    this.getUpcomingCourses();
    this.getCategoriesList();
    this.getCoursesList();
    this.getLocations();
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

          if(params && (params.category_id.length || params.course_id.length)) {
            this.filtersLocationsData = [];
    
            let locations = [];
            for(let course of this.upcomingCoursesData) {
              locations.push(course.location);
            }
            let newLocations = [];
            for(let location of locations) {
              if(newLocations.indexOf(location) === -1) newLocations.push(location);
            }
            for(let location of this.fullLocationsList) {
                const index = newLocations.indexOf(location.name);
                if(index !== -1) {
                  this.filtersLocationsData.push({ name: newLocations[index], id: location.id });
                }
            }
          }
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


  getCoursesList(categoryId?) {
    this.findCoursesService.getCoursesList(categoryId)
      .subscribe(
        data => this.filtersCoursesData = data,
        err => console.error('ERROR', err)
      );
  }

  getLocations() {
    this.findCoursesService.getLocations()
      .subscribe(
        data => this.filtersLocationsData = data,
        err => console.error('ERROR', err),
        () => this.fullLocationsList = this.filtersLocationsData
      );
  }


  selectedCategory(category) {
    const filterParams = { category_id: category.id }
    this.categoryId = category.id;
    this.getUpcomingCourses(filterParams);
  }
}
