import { Routes } from '@angular/router';

export const DATA_STRUCTURE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./stack/stack.component').then((m) => m.StackComponent),
  },
];
