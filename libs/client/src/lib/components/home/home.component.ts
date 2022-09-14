import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'client-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
