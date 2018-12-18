import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/internal/operators';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};

const api = '/api/mail/sendmail';
@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof  ErrorEvent) {
      console.error('an error occured', error.error.message);
    } else {
      console.error(`backend returned error and error code ${error.error}`
        + `body was ${error.error}`);
    }
    return throwError('something wrong please try latter');
  }
  private extractData(res: Response) {
    let body = res;
    console.log(body);
    return body || {};
  }

  sendMail(data): Observable<any> {
    const  url  = `${api}`;
    return this.http.post(url, data, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

}
