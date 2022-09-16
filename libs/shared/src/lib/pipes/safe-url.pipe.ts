import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'safeUrl',
})
export class SafeUrlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}

    transform(value: string, isResource = false): SafeHtml {
        return isResource
            ? this.sanitizer.bypassSecurityTrustResourceUrl(value)
            : this.sanitizer.bypassSecurityTrustUrl(value);
    }
}
