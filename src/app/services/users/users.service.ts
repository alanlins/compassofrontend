import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { User } from "../../model/User";
import { Repository } from "../../model/Repository";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  apiUrl = "https://api.github.com/users";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      tap(_ => this.log("fetched users")),
      catchError(this.handleError("getUsers", []))
    );
  }

  getUserRepositories(login: string): Observable<Repository[]> {
    return this.http
      .get<Repository[]>(this.apiUrl + "/" + login + "/repos")
      .pipe(
        tap(_ => this.log("fetched repositories")),
        catchError(this.handleError("getUserRepositories", []))
      );
  }

  getUserStarred(login: string): Observable<Repository[]> {
    return this.http
      .get<Repository[]>(this.apiUrl + "/" + login + "/starred")
      .pipe(
        tap(_ => this.log("fetched starred")),
        catchError(this.handleError("getUserStarred", []))
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
