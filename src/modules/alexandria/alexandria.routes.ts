import { Routes } from '@angular/router';

import { AlexandriaComponent } from './alexandria-page/alexandria.component';

export const routes: Routes = [
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
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        loadChildren: () => import('../alexandriaChoice/alexandriaChoice.routes').then((r) => r.routes)
      }
    ]
  }
];
