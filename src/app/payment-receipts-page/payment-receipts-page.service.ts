import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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

    return this.http.post(endpoint, data, '')
        .map((res: Response) => {
          const resData = res.json().items;
          console.log(resData);
          return resData;
        });

  }
}
