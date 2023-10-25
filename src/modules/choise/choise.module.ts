import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChoiseComponent } from './choise-page/choise.component';
import { ChoiseRoutingModule } from './choise-routing.module';

@NgModule({
  declarations: [
    ChoiseComponent
  ],
  imports: [
    CommonModule,
    ChoiseRoutingModule
  ]
})
export class ChoiseModule { }
