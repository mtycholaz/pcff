import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsEmitPluginModule } from '@ngxs-labs/emitter';
import {  } from '@ngxs/hmr-plugin';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,

        NgxsFormPluginModule.forRoot(),
        NgxsEmitPluginModule.forRoot(),

        NgxsModule.forRoot([]),
    ],
})
export class DataModule {}
