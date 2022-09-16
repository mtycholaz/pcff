import { NgModule } from "@angular/core";
import { AnyPipe } from "./any.pipe";
import { SafeHtmlPipe } from "./safe-html.pipe";
import { SafeUrlPipe } from "./safe-url.pipe";

const PIPES = [
    AnyPipe,
    SafeHtmlPipe,
    SafeUrlPipe,
];

@NgModule({
    declarations: [...PIPES],
    exports: [...PIPES],
})
export class PipesModule {}