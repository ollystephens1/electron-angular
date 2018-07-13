import { ApiService } from './api.service';
import { Project } from './../models/project';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectService {
  constructor(private apiService: ApiService) {}

  getProjects(): Observable<Project[]> {
    return this.apiService.request({ url: 'projects' });
  }

  addProject(project: Project): Observable<any> {
    return this.apiService.request({
      url: 'projects',
      method: 'post',
      body: project
    });
  }

  getProject(id: string): Observable<Project> {
    return this.apiService.request({ url: `projects/${id}` });
  }

  updateProject(body: Project): Observable<Project> {
    return this.apiService.request({
      method: 'put',
      url: 'projects',
      body
    });
  }

  delete(id: string): Observable<any> {
    return this.apiService.request({ url: `projects/${id}`, method: 'delete' });
  }
}
