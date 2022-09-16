import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'any',
})
export class AnyPipe implements PipeTransform {
    transform(value: Array<unknown> | null | undefined): boolean {
        if (value === null || value === undefined) {
            return false;
        }

        return value.length > 0;
    }
}
