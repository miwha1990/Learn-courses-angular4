import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class GetUpcomingCoursesService {

    constructor(private http: Http) {
    }

    getCoursesData(id?: number): Observable<any> {
        if (id) {
            return this.http.get('https://rqdqmry09e.execute-api.us-east-1.amazonaws.com/v1/classes/upcoming?class_id=' + id)
                .map((res: Response) => {
                    let a = res.json();
                    // console.log(a);
                    return a;
                });
        } else {
            return this.http.get('https://rqdqmry09e.execute-api.us-east-1.amazonaws.com/v1/classes/upcoming')
                .map((res: Response) => {
                    let a = res.json();
                    // console.log(a);
                    return a;
                });
        }
    }
}
