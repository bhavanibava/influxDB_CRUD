import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers : new HttpHeaders({ 'content-Type' : 'application/json'})
};
const apiURL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('occured ERROR is : ', error.error.message);
    }
    else {
      console.log('error status code is :' + error.status + ' body : ' + error.error);
      return throwError('bad request; pls try again');
    }
  }

  private data(res: Response) {
    const body = res;
    return body || { };
  }

  addTask(newData): Observable<any> {
    let url = `${apiURL}/task`;
    return this.http.post(url,newData,httpOptions).pipe(map(this.data),catchError(this.handleError));
  }
  getSeriesData() : Observable<any> {
    let url = `${apiURL}/task/series`;
    return this.http.get(url,httpOptions).pipe(map(this.data),catchError(this.handleError));
  }
  deleteSeriesData(title : string):Observable<any>{
    let url = `${apiURL}/task/series/${title}`;
    return this.http.delete(url,httpOptions).pipe(map(this.data),catchError(this.handleError));
  }
}
