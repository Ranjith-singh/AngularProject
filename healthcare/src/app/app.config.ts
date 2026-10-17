import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { APP_CONFIG_SERVICE, APP_CONFIG_VALUE } from './appService/appConfig/app.config.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { interceptorInterceptor } from './appService/intercept/interceptor-interceptor';
import { InitService } from './appService/init/init-service';
import { Config } from './appService/config/config';
import { title } from 'process';

// function initFactory(initService: InitService){
//   return ()=> initService.initialize();
// }

export const appConfig: ApplicationConfig = {
  
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withInterceptors([interceptorInterceptor])
    ),
    provideAppInitializer(()=>{
      const initService= inject(InitService);
      return initService.initialize();
    }),
    {
      provide: APP_CONFIG_SERVICE,
      useValue: APP_CONFIG_VALUE
    },
    {
      provide: Config,
      useValue: { title: "App"}
    }
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initFactory,
    //   deps: [InitService],
    //   multi: true
    // }
  ]
};
