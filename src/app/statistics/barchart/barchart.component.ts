import { Component, OnInit, Input } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single, multi} from './data';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})

export class BarchartComponent implements OnInit {

  @Input() alertType;

  single: any[];
  multi: any[];

  view: any[] = [400, 400];

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5b62f1', '#55f4ea', '#f4d95f', '#f37e60', '#e969ca']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = true;
  data = {};

  constructor() {
    Object.assign(this, {single, multi})   
    this.data['Application'] = getApllicativeAlerts();
    this.data['System'] = getSystemAlerts();
    this.data['Mail'] = getSystemAlerts();
    this.data['Network drivers'] = getSystemAlerts();
    this.data['Connection'] = getSystemAlerts();
    this.data['Hardware'] = getSystemAlerts();
  }
  
  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {}

}


function getApllicativeAlerts() {
  return [
    {
      "name": "יכולת גלישה לאתרים",
      "value": 36
    },
    {
      "name": "תהליכים שרצים",
      "value": 29
    },
    {
      "name": "משאבים ושימוש באתרים",
      "value": 15
    },
    {
      "name": "תאימות לגרסאות אפליקציות",
      "value": 7
    },
    {
      "name": "תפיסת שגיאות באפליקציות",
      "value": 6
    }
  ];
}

function getSystemAlerts() {
  return [
    {
      "name": "יכולת גלישה לאתרים",
      "value": Math.floor((Math.random() * 40) + 1)
    },
    {
      "name": "תהליכים שרצים",
      "value": Math.floor((Math.random() * 40) + 1)
    },
    {
      "name": "משאבים ושימוש באתרים",
      "value": Math.floor((Math.random() * 40) + 1)
    },
    {
      "name": "תאימות לגרסאות אפליקציות",
      "value": Math.floor((Math.random() * 40) + 1)
    },
    {
      "name": "תפיסת שגיאות באפליקציות",
      "value": Math.floor((Math.random() * 40) + 1)
    }
  ];
}


