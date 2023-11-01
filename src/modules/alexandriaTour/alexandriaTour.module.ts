import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlexandriaTourComponent } from './alexandriaTour-page/alexandriaTour.component';
import { AlexandriaTourRoutingModule } from './alexandriaTour-routing.module';

@NgModule({
  declarations: [
    AlexandriaTourComponent
  ],
  imports: [
    CommonModule,
    AlexandriaTourRoutingModule
  ]
})
export class AlexandriaTourModule { }
