import { Component, OnInit } from '@angular/core';

import { FindCoursesService } from './find-courses.service';

@Component({
  selector: 'app-find-courses',
  templateUrl: './find-courses.component.html',
  styleUrls: ['./find-courses.component.scss']
})
export class FindCoursesComponent implements OnInit {
  upcomingCoursesData;
  
  constructor(private findCoursesService: FindCoursesService) { }

  ngOnInit() {
    this.getUpcomingCourses();
  }

  getUpcomingCourses() {
    this.findCoursesService.getUpcomingCourses()
      .subscribe(
        data => this.upcomingCoursesData = data,
        err => console.error('ERROR', err)
      )
  }

}
