/* eslint-disable @typescript-eslint/promise-function-async */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('../modules/welcome/welcome.module').then((m) => m.WelcomeModule)
  },
  {
    path: 'alexandria',
    loadChildren: () => import('../modules/alexandria/alexandria.module').then((m) => m.AlexandriaModule)
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
