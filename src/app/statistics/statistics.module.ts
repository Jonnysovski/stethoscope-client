import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@angular/material';

import {BrowserModule} from '@angular/platform-browser'
import {NgxChartsModule} from '@swimlane/ngx-charts';

import { StatisticsCounterComponent } from './counter/counter.component';
import { HomeStatisticsComponent } from './home-statistics/home-statistics.component';
import { BarchartComponent } from './barchart/barchart.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        MaterialModule,
        BrowserModule, NgxChartsModule 
    ],
    exports: [
        StatisticsCounterComponent,
        HomeStatisticsComponent,
        BarchartComponent
    ],
    declarations: [
        StatisticsCounterComponent,
        HomeStatisticsComponent,
        BarchartComponent
    ],
    providers: [

    ],
})
export class StatisticsModule { }
