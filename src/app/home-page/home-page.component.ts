import { Component, OnInit} from '@angular/core';
import { HomepageService } from './homepage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  upcomingCoursesData;
  
  constructor(private homepageService: HomepageService) { }

  ngOnInit() {
    this.getUpcomingCourses();
  }

  getUpcomingCourses() {
    this.homepageService.getUpcomingCourses()
      .subscribe(
        data => this.upcomingCoursesData = data,
        err => console.error('ERROR', err)
      )
  }
}
