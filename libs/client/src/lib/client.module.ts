import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Route, RouterModule } from '@angular/router';

import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from '@pcff/shared';

import { HomeComponent } from './components/home/home.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { HomeState } from './state/home.state';

export const clientRoutes: Route[] = [
    { path: '', component: HomeContainerComponent },
];

@NgModule({
    declarations: [HomeComponent, HomeContainerComponent],
    imports: [
        SharedModule,

        FlexLayoutModule,

        CommonModule,
        RouterModule.forChild(clientRoutes),

        NgxsFormPluginModule,
        NgxsModule.forFeature([HomeState]),
    ],
})
export class ClientModule {}
