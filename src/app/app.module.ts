import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdlModule } from 'angular2-mdl';
import { I18nPipe, I18nService } from 'angular2-i18n';

import lang from './lang';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

import { AlertModule } from './alert/alert.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    I18nPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,

    AlertModule
  ],
  providers: [
    I18nService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(i18nService: I18nService) {
    i18nService.init(lang);
  }
}
