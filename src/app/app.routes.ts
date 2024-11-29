import { Routes } from '@angular/router'

import { PrivateRoutesGuard, PublicRoutesGuard } from './shared/guards'

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    // canActivate: [PublicRoutesGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [PrivateRoutesGuard]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
]
