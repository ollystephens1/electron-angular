import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'projects',
    loadChildren: './modules/projects/projects.module#ProjectsModule'
  },
  {
    path: 'clients',
    loadChildren: './modules/clients/clients.module#ClientsModule'
  }
];

export const AppRouter = RouterModule.forRoot(ROUTES);
