import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Alert } from './alert';
@Injectable()
export class AlertService {

    private _alertsUrl = 'http://localhost/api/trigger';
    public alerts: Alert[];

    constructor(private _http: Http) { }

    getAlerts(): Observable<Alert[]> {

        return this._http.get(this._alertsUrl)
            .map((res: Response) => {
                let response = res.json();
                response.forEach((item) => {
                    item.group = item.groups[0];
                    item.host = item.hosts[0];
                    item.lastchange = new Date(item.lastchange * 1000);
                });
                console.log(response);
                return response;
            })
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }
}