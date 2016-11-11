import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AlertModule } from '../alert/alert.module';


import { WorkstationComponent } from './workstation.component';
import { WorkstationDetailsComponent } from './details/details.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AlertModule
    ],
    exports: [
        WorkstationComponent,
        WorkstationDetailsComponent
    ],
    declarations: [
        WorkstationComponent,
        WorkstationDetailsComponent
    ],
    providers: [],
})
export class WorkstationModule { }
