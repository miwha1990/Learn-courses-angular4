import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import { environment } from '../../environments/environment';

@Injectable()
export class ContactUsService {
    environment;
    constructor(private http: Http) {
        this.environment = environment;
    }
    sendContactRequest(data): Observable<any> {
        const endpoint = `${this.environment.apiHost}${this.environment.contactUs}`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');

        return this.http.post(endpoint, JSON.stringify(data), { headers: headers})
            .map((res: Response) => {
                const resData = res.json();
                // console.log(resData);
                return resData;
            });
    }
}
