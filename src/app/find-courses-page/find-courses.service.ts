import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import { environment } from '../../environments/environment';

@Injectable()
export class FindCoursesService {
  environment;


  constructor(private http: Http) {
     this.environment = environment;
  }


  getUpcomingCourses(): Observable<any> {
    let endpoint = `${this.environment.apiHost}${this.environment.upcomingCourses}`

    return this.http.get(endpoint)
        .map((res: Response) => {
            let resData = res.json().items;
            console.info('SERVICE: Upcoming Courses', resData);
            return resData;
        });
  }

  getCategoriesList() {
    let endpoint = `${this.environment.apiHost}${this.environment.categories}`

    return this.http.get(endpoint)
        .map((res: Response) => {
            let resData = res.json().items;
            console.info('SERVICE: Categories List', resData);
            return resData;
        });
  }


}
