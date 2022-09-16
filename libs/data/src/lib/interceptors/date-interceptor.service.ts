/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { isArray, isDate, isObject, isString, isNullOrUndefined } from '@pcff/shared/util';

@Injectable()
export class DateInterceptor implements HttpInterceptor {
    static readonly ISO_8601: RegExp =
        /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/;

    intercept(
        req: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        if (req.method === 'POST') {
            req = req.clone({
                body: this.convertToIso8601(req.body),
            });
        }

        return next.handle(req).pipe(
            tap((event: HttpEvent<unknown>) => {
                if (event instanceof HttpResponse) {
                    const body = event.body;
                    this.convertToDate(body as Record<string, unknown>);
                }
            })
        );
    }

    convertToIso8601(body: unknown): unknown {
        if (body === null || body === undefined) {
            return body;
        }

        if (!isObject(body)) {
            return body;
        }

        let clone: any;
        if (isArray(body)) {
            clone = body.slice(0);
            for (let ix = 0; ix < clone.length; ix++) {
                const element = clone[ix];
                clone[ix] = this.convertToIso8601(element);
            }
        } else {
            clone = { ...body };
            for (const key of Object.keys(clone)) {
                const value: unknown = clone[key];
                if (isDate(value)) {
                    clone[key] = value.toISOString();
                } else if (typeof value === 'object') {
                    clone[key] = this.convertToIso8601(value);
                }
            }
        }

        return clone;
    }

    convertToDate(body: Record<string, unknown>): void {
        if (body === null || body === undefined || typeof body !== 'object') {
            return;
        }

        for (const key of Object.keys(body)) {
            const value = body[key];
            if (this.isIso8601(value)) {
                body[key] = new Date(value as string);
            } else if (isObject(value)) {
                this.convertToDate(value as Record<string, unknown>);
            }
        }
    }

    isIso8601(value: unknown): boolean {
        if (isString(value)) {
            return DateInterceptor.ISO_8601.test(value);
        }

        return false;
    }
}
