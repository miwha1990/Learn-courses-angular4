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

    if(params !== undefined) {
        endpoint = `${this.environment.apiHost}${this.environment.classes}?`
        for (let param in params) {
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
            // console.info('SERVICE: Upcoming Courses', resData);
            return resData;
        });
  }


  getCategoriesList() {
    const endpoint = `${this.environment.apiHost}${this.environment.categories}`;

    return this.http.get(endpoint)
        .map((res: Response) => {
            let resData = res.json().items;
            // console.info('SERVICE: Categories List', resData);
            return resData;
        });
  }


  getFiltersParams() {
    const endpointCourses = `${this.environment.apiHost}${this.environment.coursesList}`;
    const endpointLocations = `${this.environment.apiHost}${this.environment.locations}`;
    
    let getCoursesObs = this.http.get(endpointCourses)
        .map((res: Response) => { return res.json().items });

    let getLocationsObs = this.http.get(endpointLocations)
        .map((res: Response) => { return res.json().items }); 

    return Observable.combineLatest(getCoursesObs, getLocationsObs, (coursesList, locationsList) => {
        const filtersParam = {
            coursesList: coursesList,
            locationsList: locationsList
        }
        // console.log('filtersParam', filtersParam);
        
        return filtersParam;
    });           
  }
}
