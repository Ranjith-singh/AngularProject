import { InjectionToken } from "@angular/core";
import { AppConfig } from "./appconfig";
import { environment } from "../../environments/environment";

export const APP_CONFIG_SERVICE= new InjectionToken<AppConfig>('app.config')

export const APP_CONFIG: AppConfig= {
    apiEndpoint: environment.apiEndpoint
}