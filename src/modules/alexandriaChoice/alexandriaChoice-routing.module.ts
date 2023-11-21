/* eslint-disable @typescript-eslint/promise-function-async */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlexandriaChoiceComponent } from './alexandriaChoice-page/alexandriaChoice.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AlexandriaChoiceComponent
  },
  {
    path: '',
    component: AlexandriaChoiceComponent,
    children: [
      {
        path: ':tourPath',
        loadChildren: () => import('../alexandriaTour/alexandriaTour.module').then((m) => m.AlexandriaTourModule)
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AlexandriaChoiceRoutingModule { }
