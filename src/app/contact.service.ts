import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactUrl = 'http://localhost:3000/api/contact';
  constructor(private http: HttpClient, private router: Router) { }

  contactUser(user) {
    return this.http.post<any>(this.contactUrl, user)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}

