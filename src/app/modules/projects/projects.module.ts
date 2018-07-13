import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRouter } from './projects.routing';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectAddComponent } from './components/project-add/project-add.component';
import { ProjectResolver } from './resolvers/project.resolver';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRouter,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    ProjectDetailsComponent,
    ProjectAddComponent
  ],
  providers: [ProjectResolver]
})
export class ProjectsModule {}
