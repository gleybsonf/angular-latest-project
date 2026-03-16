// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

export const routes: Routes = [
  // Rota de Login (Sem Layout)
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/components/auth.component').then((m) => m.AuthComponent),
  },

  // Rotas Privadas (Com Layout e Sidebar)
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [authGuard], // Protege todas as rotas filhas
    children: [
      /*  {
        path: 'people',
        loadChildren: () => import('./features/people/people.routes').then((m) => m.PEOPLE_ROUTES),
      },
      {
        path: 'vehicles',
        loadChildren: () =>
          import('./features/vehicles/vehicles.routes').then((m) => m.VEHICLES_ROUTES),
      }, */
      { path: '', redirectTo: 'people', pathMatch: 'full' },
    ],
  },

  // Rota de fallback
  { path: '**', redirectTo: 'login' },
];
