import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WelcomeComponent } from './welcome-page/welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
