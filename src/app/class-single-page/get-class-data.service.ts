import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class GetClassDataService {
  constructor(private http: Http) { }

  getClassData(id: number): Observable<any> {
      // return this.http.get('../assets/class.json')
      return this.http.get('https://rqdqmry09e.execute-api.us-east-1.amazonaws.com/v1/classes/' + id)
        .map((res: Response) => {
          let a = res.json();
          a.venue.lat = parseFloat(a.venue.lat);
          a.venue.long = parseFloat(a.venue.long);
          console.log(a);
          return a;
        });
  }
}
// https://maps.googleapis.com/maps/api/geocode/json?address=+573+King+Street+East,+Toronto,+Ontario,+Canada,+M5A4L3&key=AIzaSyBOvCGpfetHTFZPjOa6U-UhRHHS-6OeGhU
