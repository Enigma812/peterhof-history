import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlexandriaTourComponent } from './alexandriaTour-page/alexandriaTour.component';

const routes: Routes = [{ path: '', component: AlexandriaTourComponent }];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AlexandriaTourRoutingModule { }
