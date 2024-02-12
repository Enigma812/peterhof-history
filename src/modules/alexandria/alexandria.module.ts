import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlexandriaComponent } from './alexandria-page/alexandria.component';
import { AlexandriaRoutingModule } from './alexandria-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AlexandriaRoutingModule,
    AlexandriaComponent
  ]
})
export class AlexandriaModule { }
