import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRouter } from './projects.routing';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

@NgModule({
  imports: [CommonModule, ProjectsRouter, SharedModule, HttpClientModule],
  declarations: [HomeComponent, ProjectDetailsComponent]
})
export class ProjectsModule {}
