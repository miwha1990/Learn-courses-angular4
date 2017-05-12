import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class GetDataService {
   constructor(private http: Http) { }

   getData(): Observable<any> {
      return this.http.get('../assets/data.json').map((res: Response) => res.json());
   }
}
