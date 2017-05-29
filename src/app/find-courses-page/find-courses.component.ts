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
  
  constructor(private findCoursesService: FindCoursesService) { }

  ngOnInit() {
    this.getUpcomingCourses();
    this.getCategoriesList();
  }

  getUpcomingCourses() {
    this.findCoursesService.getUpcomingCourses()
      .subscribe(
        data => this.upcomingCoursesData = data,
        err => console.error('ERROR', err)
      )
  }


  getCategoriesList() {
    this.findCoursesService.getCategoriesList()
      .subscribe(
        data => this.categoriesListData = data,
        err => console.error('ERROR', err)
      )
  }

}
