import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectResolver } from './resolvers/project.resolver';

const ROUTES = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':id',
    component: ProjectDetailsComponent,
    resolve: {
      project: ProjectResolver
    }
  }
];

export const ProjectsRouter = RouterModule.forChild(ROUTES);
