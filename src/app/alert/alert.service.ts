import { Injectable } from '@angular/core';

import { Alert } from './alert';
@Injectable()
export class AlertService {
    public alerts: Alert[];

    constructor() { }

    getAlerts(): Alert[] {
        return [
            {
                computerName: 'PTZ 23140',
                incidentNumber: 1020302,
                ipAddress: '127.0.0.1',
                lastConnectionDate: new Date(),
                lastModifier: 'רון בוריסובסקי',
                lastUpdate: new Date(),
                macAddress: 'AB:00:CD:00:EF:00',
                type: 'מסך כחול',
                userName: 'מש"ק מערך',
                priority: true
            }, {
                computerName: 'PTZ 23140',
                incidentNumber: 1020302,
                ipAddress: '127.0.0.1',
                lastConnectionDate: new Date(),
                lastModifier: 'רון בוריסובסקי',
                lastUpdate: new Date(),
                macAddress: 'AB:00:CD:00:EF:00',
                type: 'מסך כחול',
                userName: 'מש"ק מערך',
                priority: false
            }, {
                computerName: 'PTZ 23140',
                incidentNumber: 1020302,
                ipAddress: '127.0.0.1',
                lastConnectionDate: new Date(),
                lastModifier: 'רון בוריסובסקי',
                lastUpdate: new Date(),
                macAddress: 'AB:00:CD:00:EF:00',
                type: 'מסך כחול',
                userName: 'מש"ק מערך',
                priority: true
            }, {
                computerName: 'PTZ 23140',
                incidentNumber: 1020302,
                ipAddress: '127.0.0.1',
                lastConnectionDate: new Date(),
                lastModifier: 'רון בוריסובסקי',
                lastUpdate: new Date(),
                macAddress: 'AB:00:CD:00:EF:00',
                type: 'מסך כחול',
                userName: 'מש"ק מערך',
                priority: false
            }
        ];
    }
}