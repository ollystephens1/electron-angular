import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<any> {
    return this.http.get('./assets/mock/projects.json');
  }
}
