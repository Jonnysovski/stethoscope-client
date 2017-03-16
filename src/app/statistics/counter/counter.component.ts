import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'statistics-counter',
    templateUrl: 'counter.component.html',
    styleUrls: ['counter.component.scss']
})
export class StatisticsCounterComponent {
    @Input('title') title: string;
    @Input('lastUpdate') lastUpdate: Date;
    @Input('amount') amount: number;
    @Input('type') type: string;
    
    constructor() { }

    
}