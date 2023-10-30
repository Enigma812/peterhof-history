import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlexandriaChoiceComponent } from './alexandriaChoice-page/alexandriaChoice.component';

const routes: Routes = [{ path: '', component: AlexandriaChoiceComponent }];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AlexandriaChoiceRoutingModule { }
