import { Component, OnInit, Input } from '@angular/core';
import { Alert } from '../alert';
import { AlertService } from '../alert.service';

@Component({
    selector: 'alerts-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.scss']
})
export class AlertListComponent implements OnInit {
    @Input('isWorkstation') isWorkstation: boolean;
    public alerts: Alert[];

    constructor(private _alertService: AlertService) { }

    ngOnInit() {
        this._alertService.getAlerts().subscribe((alerts: Alert[]) => {
            this.alerts = alerts;
        }, (err) => {
            console.log(err);
        });
    }

    onSearch(searchOn) {
        console.log(searchOn);
        this._alertService.getFilteredFaults(searchOn).subscribe((alerts: Alert[]) => {
            this.alerts = alerts;
        }, (err) => {
            console.log(err);
        });
    }
}