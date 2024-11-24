import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardLayoutComponent } from './layout'

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages').then((m) => m.HomePageComponent)
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./pages').then((m) => m.ProductsPageComponent)
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
