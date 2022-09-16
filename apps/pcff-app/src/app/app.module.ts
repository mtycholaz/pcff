import { VERSION as ngVersion } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApplicationRef, NgModule } from '@angular/core';
import { VERSION as ngMaterialVersion } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { APP_ENVIRONMENT, APP_WINDOW } from '@pcff/shared/tokens';

import { DataModule } from '@pcff/data';
import { DateInterceptor } from '@pcff/data/interceptors';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    providers: [
        { provide: APP_ENVIRONMENT, useValue: environment },
        { provide: APP_WINDOW, useFactory: () => window },
        ...(environment.production
            ? [
                  {
                      provide: HTTP_INTERCEPTORS,
                      useClass: DateInterceptor,
                      multi: true,
                  },
              ]
            : [
                  {
                      provide: HTTP_INTERCEPTORS,
                      useClass: DateInterceptor,
                      multi: true,
                  },
              ]),
    ],
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
    bootstrap: [AppComponent],
})
export class AppModule  {
    constructor(public appRef: ApplicationRef) {
        console.log('@angular/core', ngVersion.full);
        console.log('@angular/material', ngMaterialVersion.full);
    }
}
