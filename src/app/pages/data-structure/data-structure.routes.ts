import { Routes } from '@angular/router';

export const DATA_STRUCTURE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./data-structure.component').then((m) => m.DataStructureComponent),
    children: [
      {
        path: 'stack',
        loadComponent: () =>
          import('../../features/data-structure/stack/stack.component').then(
            (m) => m.StackComponent,
          ),
      },
      /* {
        path: 'queue',
        loadComponent: () =>
          import('../../features/data-structure/queue/queue.component').then(
            (m) => m.QueueComponent,
          ),
      },
      {
        path: 'tree',
        loadComponent: () =>
          import('../../features/data-structure/tree/tree.component').then((m) => m.TreeComponent),
      }, */
    ],
  },
];
