import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { APP_CONFIG_SERVICE, APP_CONFIG_VALUE } from './appConfig/app.config.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { interceptorInterceptor } from './intercept/interceptor-interceptor';
import { InitService } from './init/init-service';

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
    }
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initFactory,
    //   deps: [InitService],
    //   multi: true
    // }
  ]
};
