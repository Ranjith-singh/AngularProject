import { InjectionToken } from '@angular/core';
import { APP_CONFIG } from './app.config';

export const APP_CONFIG_SERVICE = new InjectionToken<APP_CONFIG>('app.config');

export const APP_CONFIG_VALUE: APP_CONFIG = {
  apiEndpoint: 'https://api.example.com'
};