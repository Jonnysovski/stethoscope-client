import { Component, Input } from '@angular/core';

@Component({
    selector: 'toggle-button',
    templateUrl: 'toggle-button.component.html',
    styleUrls: ['toggle-button.component.scss']
})
export class ToggleButtonsComponent {
    @Input('name') name: string;
    @Input('label') label: string;
    @Input('checked') checked: boolean;

    constructor() { }
}