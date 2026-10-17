import { InjectionToken } from "@angular/core";
import { ConfigInterface } from "./config.interface";

export const Config= new InjectionToken<ConfigInterface>('config');