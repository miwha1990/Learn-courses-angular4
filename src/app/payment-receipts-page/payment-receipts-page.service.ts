import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class PaymentReceiptsPageService {
  environment;
  constructor(private http: Http) {
    this.environment = environment;
  }

  sendReceiptRequest(data): Observable<any> {
    const endpoint = `${this.environment.apiHost}${this.environment.orders}`;
    const headers = new Headers();
    headers.append('Content-Type', 'text/plain');
    return this.http.post(endpoint, JSON.stringify(data), headers)
        .map((res: Response) => {
          const resData = res.json();
          return resData;
        });
  }
}
