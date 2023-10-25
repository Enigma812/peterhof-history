import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChoiseComponent } from './choise-page/choise.component';

const routes: Routes = [{ path: '', component: ChoiseComponent }];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ChoiseRoutingModule { }
