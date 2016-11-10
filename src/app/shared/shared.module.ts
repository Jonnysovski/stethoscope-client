import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from 'angular2-mdl';
import { I18nService, I18nPipe } from 'angular2-i18n';

import { FlexDirective } from './layout/flex.directive';
import { LayoutDirective } from './layout/layout.directive';

import lang from '../lang';

@NgModule({
    imports: [
        CommonModule,
        MdlModule
    ],
    exports: [
        MdlModule,
        I18nPipe,
        LayoutDirective,
        FlexDirective
    ],
    declarations: [
        I18nPipe,
        FlexDirective,
        LayoutDirective
    ],
    providers: [
        I18nService
    ],
})
export class SharedModule {
    constructor(i18n: I18nService) {
        i18n.init(lang);
    }
}
