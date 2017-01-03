import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

import { PivotPoint } from './pivot-point';
import { TableItem } from './table-item';

@Injectable()
export class QueryService {

  private host = "192.168.2.239";
  private port = 5257;

  constructor(private http: Http) { }

  getQueue(): Observable<TableItem[]> {
    const url = `http://${this.host}:${this.port}/queues`;
    return this.http.get(url)
      .map((response: Response) => <TableItem[]>response.json())
      .catch(this.handleError);
  }

  getQueueLocal(): Observable<TableItem[]> {
    return this.http.get("app/queues")
      .map((res: Response) => <TableItem[]>res.json().data)
      .catch(this.handleError);
  }

  getStatistics(tmsp: number, step: number, internal: number): Observable<PivotPoint[]> {
    const url = `http://${this.host}:${this.port}/statistic?tmsp=${tmsp}&step=${step}&internal=${internal}`;
    return this.http.get(url)
      .map((response: Response) => <PivotPoint[]>response.json())
      .catch(this.handleError);
  }

  getStatisticsLocal(): Observable<PivotPoint[]> {
    return this.http.get("app/statistic")
      .map((res: Response) => <PivotPoint[]>res.json().data)
      .catch(this.handleError);
  }

  private handleError(response: Response) {
    console.error(response);
    return Observable.throw(response.json().error || 'Http get error');
  }
}
