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
  categoriesListArray;
  filtersCoursesData;
  filtersCoursesArray;
  filtersLocationsData;
  filtersLocationsArray;
  allLocations;
  loading: boolean;
  additionalInfo: boolean;
  categoryId;
  fullLocationsList;
  hideText = false;
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
    console.log(params);
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
          this.categoriesListArray = [];
          this.categoriesListArray.push({id: null, text: 'All'});
          for (const key in data) {
            const objModel  = {
              id: data[key].id,
              text: data[key].name,
            };
            this.categoriesListArray.push(objModel);
          }
          console.log(this.categoriesListArray);
        },
        err => console.error('ERROR', err)
      );
  }

  getCoursesList(categoryId?) {
    this.findCoursesService.getCoursesList(categoryId)
      .subscribe(
        data => {
          this.filtersCoursesData = data;
          this.filtersCoursesArray = [];
          this.filtersCoursesArray.push({id: null, text: 'All'});
          for (const key in data) {
            const objModel  = {
              id: data[key].id,
              text: data[key].name,
            };
            this.filtersCoursesArray.push(objModel);
          }
          console.log(this.filtersCoursesArray);
        },
        err => console.error('ERROR', err)
      );
  }

  getLocations() {
    this.findCoursesService.getLocations()
      .subscribe(
        data => {
            this.filtersLocationsData = data;
            this.filtersLocationsArray = [];
            this.filtersLocationsArray.push({id: null, text: 'All'});
              for (const key in data) {
                  const objModel  = {
                      id: data[key].id,
                      text: data[key].name,
                  };
                  this.filtersLocationsArray.push(objModel);
              }
            console.log(this.filtersLocationsArray);
              },
        err => console.error('ERROR', err),
        () => this.fullLocationsList = this.filtersLocationsData
      );
  }

  selectedCategory(category) {
    console.log('hello' + category);
    const filterParams = { category_id: category.id }
    // this.categoryId = category.id;
    this.getUpcomingCourses(filterParams);
  }
  fhideText($event) {
    this.hideText = true;
  }
}
