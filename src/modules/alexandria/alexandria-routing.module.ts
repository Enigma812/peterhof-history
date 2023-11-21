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
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AlexandriaRoutingModule { }
