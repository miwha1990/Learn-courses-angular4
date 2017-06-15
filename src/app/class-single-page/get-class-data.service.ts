import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { SafeResourceUrlPipe } from '../shared/safe-resourse-url/safe-resource-url.pipe';

@Injectable()

export class GetClassDataService {
    environment;

    constructor(private http: Http, private pipe: SafeResourceUrlPipe) {
      this.environment = environment;
    }

    getClassData(id: number): Observable<any> {
    const endpoint = `${this.environment.apiHost}${this.environment.classes}${id}`;
    return this.http.get(endpoint)
        .map((res: Response) => {
            const resData = res.json();
            // console.log(resData);
            resData.venue.latitude = parseFloat(resData.venue.latitude);
            resData.venue.longitude = parseFloat(resData.venue.longitude);
            resData.spots_early = parseFloat(resData.spots_early);
            resData.spots_regular = parseFloat(resData.spots_regular);
            resData.video_id = 'https://dtsfitnesseducation.wistia.com/embed/iframe/' + resData.video_id;
            resData.video_id = this.pipe.transform(resData.video_id);
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


