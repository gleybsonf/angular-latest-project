import { Routes } from '@angular/router';

export const PEOPLE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/people-list/people-list.component').then((m) => m.PeopleListComponent),
  },
];
