/* eslint-disable @typescript-eslint/promise-function-async */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlexandriaComponent } from './alexandria-page/alexandria.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AlexandriaComponent
  },
  {
    path: '',
    component: AlexandriaComponent,
    children: [
      {
        path: ':choicePath',
        loadChildren: () => import('../alexandriaChoice/alexandriaChoice.module').then((m) => m.ChoiceModule)
      }
    ]
  },
  {
    path: ':choicePath/:tourPath',
    loadChildren: () => import('../alexandriaTour/alexandriaTour.module').then((m) => m.AlexandriaTourModule)
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AlexandriaRoutingModule { }
