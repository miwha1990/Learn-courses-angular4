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
      const endpoint = `${this.environment.apiHost}${this.environment.upcomingCourses}`;

    return this.http.get(endpoint)
        .map((res: Response) => {
            const resData = res.json().items;
            console.log(resData);
            return resData;
        });
  }
    sendSubscription(data): Observable<any> {
      const endpoint = `https://vl355.infusionsoft.com/app/form/process/8786052e6d747e1c43f5503af713966`;

      return this.http.post(endpoint, data)
          .map((res: Response) => {
              const resData = res.json().items;
              console.log(resData);
              return resData;
          });

  }
}
