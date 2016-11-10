import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { AlertService } from './alert.service';

import { AlertsComponent } from './alerts.component';
import { AlertListComponent } from './list/list.component';
import { AlertListFilterComponent } from './list/filter/filter.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ],
    exports: [
        AlertsComponent
    ],
    declarations: [
        AlertsComponent,
        AlertListComponent,
        AlertListFilterComponent
    ],
    providers: [
        AlertService
    ],
})
export class AlertModule { }
