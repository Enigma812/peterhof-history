import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import localeRuExtra from '@angular/common/locales/extra/ru';
import localeRu from '@angular/common/locales/ru';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateCompiler, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { translateCompilerFactory } from './translate-compiler-factory';
import { TranslateLoaderFactory } from './translate-loader-factory';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatExpansionModule,
    HttpClientModule,
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
    })
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    private readonly _translate: TranslateService
  ) {
    registerLocaleData(localeRu, 'ru-RU', localeRuExtra);
    this._translate.addLangs([ 'ru' ]);
    this._translate.setDefaultLang('ru');
    this._translate.use('ru');
  }
}
