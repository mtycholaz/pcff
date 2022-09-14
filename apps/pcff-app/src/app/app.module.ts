import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataModule } from '@pcff/data';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        DataModule,

        RouterModule.forRoot([
            {
                path: '',
                loadChildren: () =>
                    import('@pcff/client').then((m) => m.ClientModule),
            },
        ]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
