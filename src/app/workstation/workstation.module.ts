import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AlertModule } from '../alert/alert.module';


import { WorkstationComponent } from './workstation.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AlertModule
    ],
    exports: [
        WorkstationComponent
    ],
    declarations: [
        WorkstationComponent
    ],
    providers: [],
})
export class WorkstationModule { }
