import { Component, OnInit, Input } from '@angular/core';

/**
* This class represents the lazy loaded HomeComponent.
*/

var alert_types = [
    'Application',
    'System',
    'Mail',
    'Network drivers',
    'Connection',
    'Hardware'
];

@Component({
    selector: 'home-statistics',
    templateUrl: 'home-statistics.component.html',
    styleUrls: ['home-statistics.component.scss'],
    host: {
        style: 'transition: 2s;'
    }
})



export class HomeStatisticsComponent implements OnInit {

    @Input() viewStatistics: boolean;
    types = alert_types;
    selectedType = this.types[0];

    constructor() {}

    ngOnInit() {
        
    }

    // typeSelect(ev, type, i) {
    //     this.selectedType = this.types[i];
    // }

        typeSelect(i) {
        this.selectedType = this.types[i];
    }
    
}