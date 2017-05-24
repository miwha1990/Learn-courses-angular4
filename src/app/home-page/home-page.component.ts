import { Component, OnInit} from '@angular/core';
import { GetUpcomingCoursesService } from './get-upcoming-courses.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  data = {};
  errorMessage: string;
  constructor(private GetUpcomingCoursesService: GetUpcomingCoursesService) { }

  ngOnInit() {
    this.GetUpcomingCoursesService.getCoursesData()
        .subscribe(res => {
          this.data = res;
        },
        error =>  this.errorMessage = <any>error);
  }
}
