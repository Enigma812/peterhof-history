/* eslint-disable @typescript-eslint/promise-function-async */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('../modules/welcome/welcome.routes')
  },
  {
    path: 'alexandria',
    loadChildren: () => import('../modules/alexandria/alexandria.routes').then((m) => m.routes)
  }
];
