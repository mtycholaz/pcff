import { InjectionToken } from "@angular/core";
import { Environment } from "./models";

export const APP_WINDOW = new InjectionToken<Window>('AppWindow');
export const APP_ENVIRONMENT = new InjectionToken<Environment>('AppEnvironment');