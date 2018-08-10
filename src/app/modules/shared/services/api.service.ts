import { Observable } from 'rxjs';
import { isEmpty } from 'lodash';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
    private toasterService: ToasterService
  ) {}
  private prefix: string = 'http://localhost:3000';

  request({ method = 'get', url = '', body = {}, query = {} } = {}): Observable<any> {
    const isGet = ['post', 'put'].indexOf(method) === -1;
    const payload = !isGet ? body : this.buildParams(query);

    url += isGet && !isEmpty(payload) ? payload : '';
    return this.http[method](`${this.prefix}/${url}`, payload).pipe(map((res: any) => {
      if (res.message && res.message.length) {
        this.toaster(res.message);
      }
      return res.data;
    }));
  }

  private buildParams(query?): HttpParams {
    return !query
      ? new HttpParams()
      : Object.keys(query).reduce((queryParams, key) => {
          queryParams.set(key, query[key]);
          return queryParams;
        }, new HttpParams());
  }

  private toaster(message: string): void {
    this.toasterService.pop('success', 'Awesome!', message);
  }
}
