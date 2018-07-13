import { ApiService } from './api.service';
import { Requirement } from './../models/requirement';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RequirementService {
  constructor(private apiService: ApiService) {}

  getRequirements(): Observable<Requirement[]> {
    return this.apiService.request({ url: 'requirements' });
  }

  addRequirement(body: Requirement): Observable<Requirement> {
    return this.apiService.request({
      url: 'requirements',
      method: 'post',
      body
    });
  }

  getRequirement(id: string): Observable<Requirement> {
    return this.apiService.request({ url: `requirements/${id}` });
  }

  updateRequirement(body: Requirement): Observable<Requirement> {
    return this.apiService.request({
      method: 'put',
      url: 'requirements',
      body
    });
  }

  delete(id: string): Observable<any> {
    return this.apiService.request({ url: `requirements/${id}`, method: 'delete' });
  }
}
