import { Component, OnInit } from '@angular/core';
import { Alert } from '../alert';
import { AlertService } from '../alert.service';

@Component({
    selector: 'alerts-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.scss']
})
export class AlertListComponent implements OnInit {
    public alerts: Alert[];

    constructor(private _alertService: AlertService) { }

    ngOnInit() {
        this.alerts = this._alertService.getAlerts();
    }
}