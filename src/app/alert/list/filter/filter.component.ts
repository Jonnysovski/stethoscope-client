import { Component, Input } from '@angular/core';

@Component({
    selector: 'alert-list-filter',
    templateUrl: 'filter.component.html',
    styleUrls: ['filter.component.scss']
})
export class AlertListFilterComponent {
    @Input('isWorkstation') isWorkstation: boolean;

    constructor() { }
}