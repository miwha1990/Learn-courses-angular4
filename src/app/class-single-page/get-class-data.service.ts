import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import { environment } from '../../environments/environment';

@Injectable()
export class GetClassDataService {
    environment;

    constructor(private http: Http) {
      this.environment = environment;
    }

    getClassData(id: number): Observable<any> {
        // const endpoint = '../../assets/class.json';
    const endpoint = `${this.environment.apiHost}${this.environment.classes}${id}`;
    return this.http.get(endpoint)
        .map((res: Response) => {
            const resData = res.json();
            resData.venue.lat = parseFloat(resData.venue.lat);
            resData.venue.long = parseFloat(resData.venue.long);
            resData.spots_early = parseFloat(resData.spots_early);
            resData.spots_regular = parseFloat(resData.spots_regular);
            // console.log(resData);
            return resData;
    });
    }
    getUpcomingCourses(id: number): Observable<any> {
    const endpoint = `${this.environment.apiHost}${this.environment.upcomingRelated}${id}`;
    return this.http.get(endpoint)
        .map((res: Response) => {
            const resData = res.json().items;
            // console.log('SERVICE: Upcoming Courses', resData);
            return resData;
        });
    }
}


