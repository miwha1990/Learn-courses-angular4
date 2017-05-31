import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import { environment } from '../../environments/environment';

@Injectable()
export class OrderProcessService {
  environment;
  secretData = {};

  constructor(private http: Http) {
      this.environment = environment;
  }

  processOrder(): Observable<any> {
   const endpoint = `${this.environment.apiHost}${this.environment.classes}${1}`;
   this.secretData = {name: "Anna", course: "angular", order: "100500"};
   return this.http.get(endpoint)
    .map((res: Response) => {
      const resData = res.json();
        resData.venue.lat = parseFloat(resData.venue.lat);
        resData.venue.long = parseFloat(resData.venue.long);
      console.log(resData);
      return resData;
    });
  }
    provideData = function() {
        return this.secretData;
    };
    processClick = function(data) {
      // this.processOrder(data);
      this.provideData();
    };
}
