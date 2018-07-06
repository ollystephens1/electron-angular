import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ClientResolver } from './resolvers/client.resolver';

const ROUTES = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':id',
    component: ClientDetailsComponent,
    resolve: {
      client: ClientResolver
    }
  }
];

export const ClientsRouter = RouterModule.forChild(ROUTES);
