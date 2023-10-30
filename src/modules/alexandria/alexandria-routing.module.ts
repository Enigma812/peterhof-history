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
        path: ':choisePath',
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        loadChildren: () => import('../choise/choise.module').then((m) => m.ChoiseModule)
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AlexandriaRoutingModule { }
