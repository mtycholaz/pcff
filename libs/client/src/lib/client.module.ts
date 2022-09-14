import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';

import { HomeComponent } from './components/home/home.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { HomeState } from './state/home.state';

export const clientRoutes: Route[] = [
    { path: '', component: HomeContainerComponent },
];

@NgModule({
    declarations: [HomeComponent, HomeContainerComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(clientRoutes),
        NgxsModule.forFeature([HomeState]),
    ],
})
export class ClientModule {}
