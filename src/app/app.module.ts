import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

/* Modules */
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AlertModule } from './alert/alert.module';
import { StatisticsModule } from './statistics/statistics.module';
import { WorkstationModule } from './workstation/workstation.module';

/* Components */
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
    declarations: [
        AppComponent,
        SearchBarComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        AppRoutingModule,
        SharedModule,
        StatisticsModule,
        HomeModule,
        AlertModule,
        WorkstationModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
