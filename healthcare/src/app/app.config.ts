import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { APP_CONFIG_SERVICE, APP_CONFIG_VALUE } from './appConfig/app.config.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { interceptorInterceptor } from './intercept/interceptor-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient(
      withInterceptors([interceptorInterceptor])
    ),
    {
      provide: APP_CONFIG_SERVICE,
      useValue: APP_CONFIG_VALUE
    }
  ]
};
