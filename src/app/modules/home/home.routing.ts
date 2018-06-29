import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';

const ROUTES = [
  {
    path: '',
    component: HomeComponent
  }
];

export const HomeRouter = RouterModule.forChild(ROUTES);
