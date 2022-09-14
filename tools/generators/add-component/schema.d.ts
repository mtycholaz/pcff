import { Schema as ComponentOptions } from '@nrwl/angular/src/generators/component/schema';

export interface Schema extends ComponentOptions {
    addContainer?: boolean;
}

export interface NormalizedSchema extends Schema {
    path: string;
    project: string;
    projectSourceRoot: string;
}
