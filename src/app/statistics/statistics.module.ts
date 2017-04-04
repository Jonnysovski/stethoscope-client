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
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        MaterialModule,
        BrowserModule,
        NgxChartsModule 
    ],
    exports: [
        StatisticsCounterComponent,
        HomeStatisticsComponent,
        BarchartComponent,
        StatisticsComponent
    ],
    declarations: [
        StatisticsCounterComponent,
        HomeStatisticsComponent,
        BarchartComponent,
        StatisticsComponent
    ],
    providers: [

    ],
})
export class StatisticsModule { }
