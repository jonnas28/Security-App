import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component:LayoutComponent,
    children:[
      {
        path:'', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
      },      
      {
        path:'permission', loadChildren: () => import('./pages/permission/permission.module').then(m => m.PermissionModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
