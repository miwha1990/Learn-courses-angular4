import { Component, Input, OnInit } from '@angular/core';
import { GetUpcomingCoursesService } from './get-upcoming-courses.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-upcoming-courses',
  templateUrl: './upcoming-courses.component.html',
  styleUrls: ['./upcoming-courses.component.scss']
})
export class UpcomingCoursesComponent implements OnInit {
  data = {};
  errorMessage: string;

  constructor(private GetUpcomingCoursesService: GetUpcomingCoursesService, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id: number = params['id'];
      this.GetUpcomingCoursesService.getCoursesData(id)
          .subscribe(res => {
                this.data = res;
              },
              error =>  this.errorMessage = <any>error);
    });
  }
}
