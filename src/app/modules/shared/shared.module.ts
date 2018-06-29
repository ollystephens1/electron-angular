import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityCardComponent } from './components/activity-card/activity-card.component';
import { ProjectService } from './services/project.service';
import { RequirementService } from './services/requirement.service';
import { ActivityService } from './services/activity.service';
import { UserService } from './services/user.service';
import { ClientService } from './services/client.service';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ClientCardComponent } from './components/client-card/client-card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    ActivityCardComponent,
    ProjectCardComponent,
    ClientCardComponent,
    SpinnerComponent
  ],
  exports: [
    ActivityCardComponent,
    ProjectCardComponent,
    ClientCardComponent,
    SpinnerComponent
  ],
  providers: [
    ProjectService,
    ClientService,
    UserService,
    ActivityService,
    RequirementService
  ]
})
export class SharedModule {}
