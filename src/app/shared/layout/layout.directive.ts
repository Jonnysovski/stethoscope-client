import { Directive, Input, HostBinding } from '@angular/core';
@Directive({
    selector: '[layout]'
})
export class LayoutDirective {
    @Input() layout: string;
    @Input() flexWrap: string;
    @HostBinding('style.display') display = 'flex';
    @HostBinding('style.flex-direction')
    get direction() {
        return (this.layout === 'column') ? 'column' : 'row';
    }
    @HostBinding('style.flex-wrap')
    get wrap() {
        return (this.flexWrap === 'wrap') ? 'wrap' : 'nowrap';
    }
}