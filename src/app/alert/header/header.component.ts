import { Component, OnInit, Input } from '@angular/core';
import { Alert } from '../alert';
import { AlertService } from '../alert.service';

@Component({
    selector: 'alerts-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class AlertHeaderComponent  { 
    public alerts: Alert[];
    public viewStatistics: boolean = false;
    
    constructor( private _alertService: AlertService) { }

    ngOnInit() {
        this._alertService.getAlerts().subscribe((alerts: Alert[]) => {
            this.alerts = alerts;
        }), (err) => {
            console.log(err);
        }
    }

    isThereAlerts() {
        if(!this.alerts) {
            return false
        }
        if(this.alerts.length == 0) {
            return false;
        }
        return true;
    }
}