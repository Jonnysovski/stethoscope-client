import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

import { AlertModule } from './alert/alert.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,

    AlertModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
