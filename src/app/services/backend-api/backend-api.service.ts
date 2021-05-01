import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Category, Transaction} from './interfaces';
import {Observable, throwError} from 'rxjs';
import {Urls} from './enum';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http: HttpClient) { }

  private static handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    }
    else {
      console.error(
        `Backend returned code ${ error.status }` +
        `body was: ${ error.error }`
      );
    }

    return throwError('Something bad happened; please try again later.');
  }

  getCategories(): Observable<Category[]> {
    const url: string = 'https://localhost:5001/api/v1/getCategories';

    return this.http.get<Category[]>(url).pipe(
      catchError(BackendApiService.handleError)
    );
  }

  getTransactions(): Observable<Transaction[]> {
    const url: string = Urls.transactions;

    return this.http.get<Transaction[]>(url).pipe(
      catchError(BackendApiService.handleError)
    );
  }

  updateTransactions(transactions: Transaction[]): void {
    const url: string = Urls.transactions;

    this.http.put(url, transactions);
  }
}
