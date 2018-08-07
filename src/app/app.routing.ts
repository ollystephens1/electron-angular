import { LoginComponent } from './modules/login/login.component';

import { AuthGuard } from './auth/auth.guard';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'projects',
    canActivate: [AuthGuard],
    loadChildren: './modules/projects/projects.module#ProjectsModule'
  },
  {
    path: 'clients',
    canActivate: [AuthGuard],
    loadChildren: './modules/clients/clients.module#ClientsModule'
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

export const AppRouter = RouterModule.forRoot(ROUTES);
