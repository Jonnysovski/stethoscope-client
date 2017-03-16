import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss'],
    host: {
        class: 'page-view',
        style: 'margin: auto;'
    }
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}