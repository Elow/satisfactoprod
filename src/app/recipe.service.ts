import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Recipe } from './DTO/Recipe';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  recipes: Recipe[] = [];

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('assets/mocks/mock-recipes.json').pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    ).pipe(tap(console.log));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
