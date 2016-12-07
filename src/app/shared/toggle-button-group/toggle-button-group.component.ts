import { Component, Input } from '@angular/core';

@Component({
    selector: 'toggle-button-group',
    templateUrl: 'toggle-button-group.component.html',
    styleUrls: ['toggle-button-group.component.scss']
})
export class ToggleButtonGroupComponent {
    @Input('items') items: string[];
    @Input('name') name: string;

    constructor() { }
}