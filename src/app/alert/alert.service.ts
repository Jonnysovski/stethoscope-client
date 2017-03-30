import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Alert } from './alert';
@Injectable()
export class AlertService {

    private _alertsUrl = 'http://localhost:3000/api/test';
    private _hostsUrl = 'http://localhost:3000/api/host'


    constructor(private _http: Http) { }

    getAlerts(): Observable<Alert[]> {

        return this._http.get(this._alertsUrl)
            .map((res: Response) => {
                let response = res.json();
                response.forEach((item) => {
                    item.group = item.groups[0];
                    item.host = item.hosts[0];
                    item.userName = item.currentUser;
                    item.lastConnectionDate = item.lastLogin;
                    item.lastchange = new Date(item.lastchange * 1000);
                });
                console.log(response);
                return response;
            })
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }

    getHostNum(): Observable<number> {
        return this._http.get(this._hostsUrl+'/count')
            .map((res: Response) => {
                let response = res.json();
                console.log(response);
                return response;
            }).catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }
}