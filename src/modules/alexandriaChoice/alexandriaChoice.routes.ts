import { Routes } from '@angular/router';

import { AlexandriaChoiceComponent } from './alexandriaChoice-page/alexandriaChoice.component';

export const routes: Routes =  [
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
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        loadChildren: () => import('../alexandriaTour/alexandriaTour.routes').then((r) => r.routes)
      }
    ]
  }
];
