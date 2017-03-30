import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommonService {

    private _hostsUrl = 'http://localhost:3000/api/host'
    private _triggerUrl = 'http://localhost:3000/api/trigger'


    constructor(private _http: Http) { }

    getHostNum(): Observable<number> {
        return this._http.get(this._hostsUrl+'/count')
            .map((res: Response) => {
                let response = res.json();
                console.log(response);
                return response;
            }).catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }

    getSeverNum(): Observable<number> {
        return this._http.get(this._triggerUrl+'/count')
            .map((res: Response) => {
                let response = res.json();
                console.log(response);
                return response;
            }).catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }
}