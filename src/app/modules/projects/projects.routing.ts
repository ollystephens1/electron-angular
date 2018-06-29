import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

const ROUTES = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':id',
    component: ProjectDetailsComponent
  }
];

export const ProjectsRouter = RouterModule.forChild(ROUTES);
