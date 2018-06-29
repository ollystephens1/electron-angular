import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';

const ROUTES = [
  {
    path: '',
    component: HomeComponent
  }
];

export const ClientsRouter = RouterModule.forChild(ROUTES);
