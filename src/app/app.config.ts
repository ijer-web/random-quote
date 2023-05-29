import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {Urls} from './core/api/urls';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(Urls, HttpClientModule, BrowserAnimationsModule ),
    provideRouter(routes)
  ]
};

