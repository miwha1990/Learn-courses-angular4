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


  getUpcomingCourses(params?): Observable<any> {
    let endpoint;
    console.log('service params:' + params);
    if (params !== undefined) {
        endpoint = `${this.environment.apiHost}${this.environment.classes}?`
        for (const param in params) {
            if (params[param]) {
                endpoint += `${param}=${params[param]}&`;
            }
        }
    }
    else {
        endpoint = `${this.environment.apiHost}${this.environment.upcomingCourses}`;
    }
    return this.http.get(endpoint)
        .map((res: Response) => {
            let resData = res.json().items;
            resData = resData.filter(function(obj){
                return obj.is_hidden_event !== true;
            });
            console.info('SERVICE: Upcoming Courses', resData);
            return resData;
        });
  }


  getCategoriesList() {
    const endpoint = `${this.environment.apiHost}${this.environment.categories}`;

    return this.http.get(endpoint)
        .map((res: Response) => {
            const resData = res.json().items.sort(this.sortAlphabetic);
            console.info('SERVICE: Categories List', resData);
            return resData;
        });
  }


  getCoursesList(categoryId?) {
      console.log(categoryId);
    let endpointCourses = `${this.environment.apiHost}${this.environment.coursesList}`;
    if(categoryId) endpointCourses += `?category_id=${categoryId}`;
    return this.http.get(endpointCourses)
        .map((res: Response) => { return res.json().items.sort(this.sortAlphabetic); });
  }


  getLocations() {
    const endpointLocations = `${this.environment.apiHost}${this.environment.locations}`;
    return this.http.get(endpointLocations)
        .map((res: Response) => { return res.json().items.sort(this.sortAlphabetic); });
  }

    sortAlphabetic(a, b) {
        if (a.name < b.name)
            return -1;
        if (a.name > b.name)
            return 1;
        return 0;
    }
}
