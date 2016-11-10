import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { SharedModule } from '../shared/shared.module';
import { AlertModule } from '../alert/alert.module';
import { StatisticsModule } from '../statistics/statistics.module';

/* Components */
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AlertModule,
        StatisticsModule
    ],
    exports: [
        HomeComponent
    ],
    declarations: [
        HomeComponent
    ],
    providers: [],
})
export class HomeModule { }
