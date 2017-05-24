import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-courses',
  templateUrl: './upcoming-courses.component.html',
  styleUrls: ['./upcoming-courses.component.scss']
})
export class UpcomingCoursesComponent implements OnInit {
  @Input() items: {};
  constructor() { }
  ngOnInit() {
  }
}
