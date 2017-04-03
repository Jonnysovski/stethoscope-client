import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'alert-list-filter',
    templateUrl: 'filter.component.html',
    styleUrls: ['filter.component.scss']
})
export class AlertListFilterComponent {
    computerName: string;
    userName: string;
    ipAdress: string;
    macAdress: string;
    freeDesc: string;

    @Input('isWorkstation') isWorkstation: boolean;
    @Output() onSearch = new EventEmitter<any>();
    constructor() { }

    search() {
        this.onSearch.emit({
            hostName: this.computerName,
            userName: this.userName,
            ip: this.ipAdress,
            macAdress: this.macAdress,
            freeDesc: this.freeDesc
        });
    }
}