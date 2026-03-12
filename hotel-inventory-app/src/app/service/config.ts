import { Inject, Injectable } from '@angular/core';
import { RouteConfigToken } from './routeConfig.service';
import { RouteConfig } from './RouteConfig';

@Injectable({
  providedIn: 'root',
})
export class Config {
  constructor(@Inject(RouteConfigToken) private routeConfig: RouteConfig){
    console.log("Config Initialized");
    console.log(this.routeConfig)
  }
}
