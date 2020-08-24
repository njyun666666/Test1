import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { }


  get(url: string, optionParams?: { [param: string]: any }, optionHeader?: { [header: string]: string }): Observable<any> {
    // example
    //let api = 'api/Test/A1_SP_Test_Get';
    //let para = { 'key': 'value', 'key2': 'value2', 'key3': 'value3' };
    //let headers = {
    //  'Content-Type': 'application/json',
    //  'Authorization': 'my-auth-token'
    //};

    //let httpOptions = {
    //  headers: new HttpHeaders( {
    //    'Content-Type': 'application/json',
    //    'Authorization': 'my-auth-token'
    //  }),
    //  params: new HttpParams()
    //    .append('key', 'value')
    //    .append('key2', 'value2')
    //    .append('key3', 'value3')
    //};


    let httpOptions = {
      headers: new HttpHeaders(optionHeader),
      params: new HttpParams({ fromObject: optionParams }),
      withCredentials: true
    };

    return this.http.get(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  post(url: string, optionParams?: { [param: string]: any } | FormData, optionHeader?: { [header: string]: string }): Observable<any> {

    let httpOptions = {
      headers: new HttpHeaders(optionHeader),
      withCredentials: true 
    };

    return this.http.post(url, optionParams, httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was:\n${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      `Backend returned code ${error.status}.`);
  };



}
