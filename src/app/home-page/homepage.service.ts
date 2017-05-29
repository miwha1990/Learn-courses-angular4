import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import { environment } from '../../environments/environment';

@Injectable()
export class HomepageService {
  environment;
  constructor(private http: Http) {
     this.environment = environment;
  }


  getUpcomingCourses(id: number = null): Observable<any> {
    let endpoint = `${this.environment.apiHost}${this.environment.upcomingCourses}`

    return this.http.get(endpoint)
        .map((res: Response) => {
            let resData = res.json().items;
            console.info(resData);
            return resData;
        });
  }


}
