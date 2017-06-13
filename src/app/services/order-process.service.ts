import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Router} from '@angular/router';

import { environment } from '../../environments/environment';

@Injectable()
export class OrderProcessService {
  environment;
  secretData = {};

  constructor(private http: Http, private router: Router) {
      this.environment = environment;
  }
    provideData = function(data) {
        this.secretData = data;
        this.router.navigate(['/checkout-page']);
        console.log(this.secretData);
        return ;
    };
   checkOutInfoRequest = function(id, params?) {
       let endpointCh = `${this.environment.apiHost}${this.environment.classes}${id}${this.environment.checkout}`;
       if (params !== undefined) {
           endpointCh += `?`;
           for (const param in params) {
               if (params[param]) {
                   endpointCh += `${param}=${params[param]}&`;
               }
           }
       }
       const endpointWv = `${this.environment.apiHost}${this.environment.waivers}${id}`;
       const getCheckoutObs = this.http.get(endpointCh)
           .map((res: Response) => {
               return res.json();
           });
       const getWaiversObs = this.http.get(endpointWv)
           .map((res: Response) => {
               return res.json();
           });
       return Observable.combineLatest(getCheckoutObs, getWaiversObs, (checkoutData, waiver) => {
           const resData = {
               checkoutData: checkoutData,
               waiver: waiver
           };
           // console.log(resData);
           return resData;
       });
   };
    checkOutDataRequest(id, params?): Observable<any> {
        let endpoint = `${this.environment.apiHost}${this.environment.classes}${id}${this.environment.checkout}`;
        if (params !== undefined) {
            endpoint += `?`;
            for (const param in params) {
                if (params[param] != null) {
                    endpoint += `${param}=${params[param]}&`;
                }
            }
        }
        return this.http.get(endpoint)
            .map((res: Response) => {
                const resData = res.json();
                // console.log(resData);
                return resData;
            });
    }
   sendRegistrationData(data) {
       const endpoint = `${this.environment.apiHost}${this.environment.registrations}`;
       const headers = new Headers();
       headers.append('Content-Type', 'text/plain');
       return this.http.post(endpoint, JSON.stringify(data), headers)
           .map((res: Response) => {
           // console.log(res);
               const resData = res.json();
               this.secretData['first_name'] = data.first_name;
               this.secretData['confirmation_id'] = resData.confirmation_id;
               this.router.navigate(['/thank-you']);
               return;
           });
   }
}
