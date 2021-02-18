import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { EMPTY, Observable ,  throwError } from 'rxjs';

import { catchError, expand, reduce, share, shareReplay, tap } from 'rxjs/operators';
import { Data } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(
    private http: HttpClient,
  ) {}

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.apiUrl}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  delete(path: string): Observable<any> {
    return this.http.delete(
      `${environment.apiUrl}${path}`
    ).pipe(catchError(this.formatErrors));
  }

  getAllPages(path: string): Observable<any> {
    const url: string = `${environment.apiUrl}${path}`;
    let pageCount: number = 1;
    return this.get(path).pipe(
      expand( (res: Data) => pageCount <= res.meta.pagination.pages ? this.http.get<Data>(url+"?page="+ pageCount ) : EMPTY),
      tap( () => pageCount++ ),
      reduce( (acc, res: any) => acc.concat(res.data), [] ),
      shareReplay()
    )
  }
}
