import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';

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
    activeDevices: number;
    serverNum: number;

    constructor(private _commonService: CommonService) { }
    
    public date = new Date();
    ngOnInit() {
        this._commonService.getHostNum().subscribe((activeDevices) => {
            this.activeDevices = activeDevices;
        }, (err) => {
            console.log(err);
        });

        this._commonService.getSeverNum().subscribe((serverNum) => {
            this.serverNum = serverNum;
        }, (err) => {
            console.log(err);
        });
     }
}