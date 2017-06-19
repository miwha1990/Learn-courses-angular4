import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Injectable()
export class AlertsService {
    private params = {
        success: <boolean> false,
        error: <boolean> false,
        message: <string> ''};
    constructor(private http: Http, private router: Router) {}
    showAlert = function(param) {
        this.params['success'] = param.success;
        this.params['error'] = param.error;
        this.params['message'] = param.message;
    };
}
