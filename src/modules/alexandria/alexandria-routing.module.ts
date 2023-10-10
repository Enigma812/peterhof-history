import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlexandriaComponent } from './alexandria-page/alexandria.component';

const routes: Routes = [{ path: '', component: AlexandriaComponent }];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AlexandriaRoutingModule { }
