import { Component, OnInit } from '@angular/core';
import {GetClassDataService} from './get-class-data.service';

@Component({
  selector: 'app-class-single-page',
  templateUrl: './class-single-page.component.html',
  styleUrls: ['./class-single-page.component.scss']
})
export class ClassSinglePageComponent implements OnInit {
  data = {};
  errorMessage: string;
  constructor(private GetClassDataService: GetClassDataService) { }

  ngOnInit() {
    this.GetClassDataService.getClassData(1).subscribe(r => {this.data = r; console.log(r);}, error =>  this.errorMessage = <any>error);
  }
}
