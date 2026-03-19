import { APP_INITIALIZER, ApplicationConfig, ErrorHandler, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { requestInterceptor } from './request-interceptor';
import { InitService } from './init-service';
import { RouteConfigToken } from './service/routeConfig.service';
import { GlobalErrorHandler } from './ErrorHandling.service';

function initFactory(initService: InitService){
  return ()=> initService.init();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([requestInterceptor])
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true
    },
    {
      provide: RouteConfigToken,
      useValue: {title: "home"}
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]
};
