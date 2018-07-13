import { ProjectService } from './../../shared/services/project.service';
import { Project } from './../../shared/models/project';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class ProjectResolver implements Resolve<Project> {
  constructor(private projectService: ProjectService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project> {
    return this.projectService.getProject(route.params['id']);
  }
}