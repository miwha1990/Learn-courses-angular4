import { Component, OnInit } from '@angular/core';
import {GetDataService } from '../get-data.service';

@Component({
  selector: 'app-upcoming-courses',
  templateUrl: './upcoming-courses.component.html',
  styleUrls: ['./upcoming-courses.component.scss']
})
export class UpcomingCoursesComponent implements OnInit {
  data = {};
  errorMessage: string;
  constructor( private GetDataService: GetDataService) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.GetDataService.getData().subscribe(res => {this.data = res; }, error =>  this.errorMessage = <any>error);
  }
}
