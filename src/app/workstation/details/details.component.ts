import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'workstation-details',
    templateUrl: 'details.component.html',
    styleUrls: ['details.component.scss']
})
export class WorkstationDetailsComponent implements OnInit {
    public workstationName: string;

    constructor(private _route: ActivatedRoute) { }

    ngOnInit() {
        this._route.params.subscribe(params => {
            this.workstationName = params["name"];
        });
    }
}