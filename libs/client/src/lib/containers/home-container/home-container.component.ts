import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { HomeState } from '../../state/home.state';

@Component({
    selector: 'client-home-container',
    template: ` <client-home [message]="message$ | async"></client-home> `,
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContainerComponent {
    @Select(HomeState.getMessage())
    message$: Observable<string>;
}
