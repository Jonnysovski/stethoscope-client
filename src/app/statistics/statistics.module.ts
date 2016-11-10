import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { StatisticsCounterComponent } from './counter/counter.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ],
    exports: [
        StatisticsCounterComponent
    ],
    declarations: [
        StatisticsCounterComponent
    ],
    providers: [

    ],
})
export class StatisticsModule { }
