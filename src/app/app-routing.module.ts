import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }         from './app.component';

import { homeRoutes }           from './home/home.routes';
import { alertRoutes }          from './alert/alert.routes';
import { statisticsRoutes }     from './statistics/statistics.routes';
import { workstationRoutes }    from './workstation/workstation.routes';

const routes: Routes = [
    { path: '',             redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',         children: [...homeRoutes] },
    { path: 'statistics',   children: [...statisticsRoutes] },
    { path: 'alerts',       children: [...alertRoutes] },
    { path: 'workstation',  children: [...workstationRoutes] },
    { path: '**',           redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }