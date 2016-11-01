import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertsComponent } from './alerts.component';

const routes: Routes = [
    { path: 'alerts', component: AlertsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AlertsRoutingModule { }

export const routedComponents = [AlertsComponent];