import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@angular/material';
import { StatisticsModule } from '../statistics/statistics.module';

import { AlertService } from './alert.service';

import { AlertsComponent } from './alerts.component';
import { AlertHeaderComponent } from './header/header.component';
import { AlertListComponent } from './list/list.component';
import { AlertListFilterComponent } from './list/filter/filter.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        MaterialModule,
        StatisticsModule
    ],
    exports: [
        AlertsComponent,
        AlertHeaderComponent,
        AlertListComponent,
        AlertListFilterComponent
    ],
    declarations: [
        AlertsComponent,
        AlertHeaderComponent,
        AlertListComponent,
        AlertListFilterComponent
    ],
    providers: [
        AlertService
    ],
})
export class AlertModule { }
