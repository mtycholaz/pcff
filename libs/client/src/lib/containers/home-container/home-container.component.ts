import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'client-home-container',
    template: ` <client-home></client-home> `,
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContainerComponent {}
