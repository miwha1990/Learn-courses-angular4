import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class GetClassDataService {
  constructor(private http: Http) { }

  getClassData(id: number): Observable<any> {
    // return this.http.get('https://api.dtsfitnesseducation.com/v1/classes/' + id).map((res: Response) => res.json());
    return this.http.get('../assets/class.json').map((res: Response) => res.json());
  }
}
