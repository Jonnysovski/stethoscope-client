import { Component, OnInit } from '@angular/core';
import { Alert } from './alert';
import { AlertService } from './alert.service';

@Component({
    selector: 'alerts',
    templateUrl: 'alerts.component.html',
    styleUrls: ['alerts.component.scss']
})
export class AlertsComponent implements OnInit {

    public alerts: Alert[] =[];

    constructor(private _alertService: AlertService) { }

    ngOnInit() {
        this._alertService.getAlerts().subscribe((alerts: Alert[]) => {
            this.alerts = alerts;
        }, (err) => {
            console.log(err);
        });
     }
}