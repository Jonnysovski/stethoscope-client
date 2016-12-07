import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdlModule } from 'angular2-mdl';
import { I18nService, I18nPipe } from 'angular2-i18n';

import { FlexDirective } from './layout/flex.directive';
import { LayoutDirective } from './layout/layout.directive';
import { ToggleButtonGroupComponent } from './toggle-button-group/toggle-button-group.component';
import { ToggleButtonsComponent } from './toggle-button-group/toggle-button/toggle-button.component';

import lang from '../lang';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MdlModule
    ],
    exports: [
        MdlModule,
        I18nPipe,
        LayoutDirective,
        FlexDirective,
        ToggleButtonGroupComponent,
        ToggleButtonsComponent
    ],
    declarations: [
        I18nPipe,
        FlexDirective,
        LayoutDirective,
        ToggleButtonGroupComponent,
        ToggleButtonsComponent
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
