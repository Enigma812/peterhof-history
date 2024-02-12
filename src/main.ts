/// <reference types="@angular/localize" />

import { withInterceptorsFromDi, provideHttpClient, HttpClient } from '@angular/common/http';
import { isDevMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader, TranslateCompiler } from '@ngx-translate/core';

import { routes } from './app/app-routes';
import { AppComponent } from './app/app.component';
import { translateCompilerFactory } from './app/translate-compiler-factory';
import { TranslateLoaderFactory } from './app/translate-loader-factory';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      NgbModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: TranslateLoaderFactory,
          deps: [
            HttpClient
          ]
        },
        compiler: {
          provide: TranslateCompiler,
          useFactory: translateCompilerFactory
        }
      }),
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: !isDevMode(),
        // Register the ServiceWorker as soon as the application is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
      })
    ),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes)
  ]
})
  .catch((err) => console.error(err));
