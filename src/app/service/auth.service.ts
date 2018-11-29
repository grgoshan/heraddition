import {Injectable, ViewContainerRef} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/internal/operators';
import {ToastrService} from 'ngx-toastr';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api/auth';
@Injectable({
  providedIn: 'root'
})
export class  AuthService {
constructor(private http: HttpClient, private toast: ToastrService) {}

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof  ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('an error occured:', error.error.message);


  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(`backend returned error and error code ${error.status}` +
   `body was : ${error.error}` );

  }
  return throwError('something bad happend: please try again later');
}
  private extractData(res: Response) {
    let body = res;
    console.log(body);
    return body || {
    };
  }

  userLogin(data): Observable<any> {
  const  url  = `${apiUrl}/signin`;
  return this.http.post(url, data, httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError)
  );
  }


  userSignUp(data): Observable<any> {
    const  url  = `${apiUrl}/signup`;
    return this.http.post(url, data, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
}
