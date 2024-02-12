import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlexandriaChoiceComponent } from './alexandriaChoice-page/alexandriaChoice.component';
import { AlexandriaChoiceRoutingModule } from './alexandriaChoice-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AlexandriaChoiceRoutingModule,
    AlexandriaChoiceComponent
  ]
})
export class ChoiceModule { }
