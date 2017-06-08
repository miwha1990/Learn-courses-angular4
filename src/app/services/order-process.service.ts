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
   checkOutInfoRequest = function(id) {
       const endpointCh = `${this.environment.apiHost}${this.environment.classes}${id}${this.environment.checkout}`;
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
           console.log(resData);
           return resData;
       });
   };
}
