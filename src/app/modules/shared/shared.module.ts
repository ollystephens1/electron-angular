import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActivityCardComponent } from './components/activity-card/activity-card.component';
import { ProjectService } from './services/project.service';
import { RequirementService } from './services/requirement.service';
import { ActivityService } from './services/activity.service';
import { UserService } from './services/user.service';
import { ClientService } from './services/client.service';
import { ApiService } from './services/api.service';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ClientCardComponent } from './components/client-card/client-card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { BlankSlateComponent } from './components/blank-slate/blank-slate.component';
import { SelectPickerComponent } from './components/select-picker/select-picker.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [
    ActivityCardComponent,
    ProjectCardComponent,
    ClientCardComponent,
    SpinnerComponent,
    BlankSlateComponent,
    SelectPickerComponent
  ],
  exports: [
    ActivityCardComponent,
    ProjectCardComponent,
    ClientCardComponent,
    SpinnerComponent,
    BlankSlateComponent,
    SelectPickerComponent
  ],
  providers: [
    ProjectService,
    ClientService,
    UserService,
    ActivityService,
    RequirementService,
    ApiService
  ]
})
export class SharedModule {}
