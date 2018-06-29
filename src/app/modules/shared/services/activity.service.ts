import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ActivityService {
  constructor(private http: HttpClient) {}

  getActivities(): Observable<any> {
    return this.http.get('./assets/mock/activities.json');
  }
}
