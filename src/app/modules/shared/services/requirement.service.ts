import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequirementService {
  constructor(private http: HttpClient) {}

  getRequirements(): Observable<any> {
    return this.http.get('./assets/mock/requirements.json');
  }
}
