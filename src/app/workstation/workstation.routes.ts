import { Routes, RouterModule } from '@angular/router';
import { WorkstationComponent } from './workstation.component';

export const workstationRoutes: Routes = [
    { path: ':name', component: WorkstationComponent },
];