import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlexandriaComponent } from './alexandria-page/alexandria.component';
import { AlexandriaRoutingModule } from './alexandria-routing.module';

@NgModule({
  declarations: [
    AlexandriaComponent
  ],
  imports: [
    CommonModule,
    AlexandriaRoutingModule
  ]
})
export class AlexandriaModule { }
