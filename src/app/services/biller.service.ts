import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/internal/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillerService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getBillers() {
    let url = this.baseUrl + "EFFYIS/api/payment/creanciers?category=";
    return this.http.get<[]>(url).pipe(catchError(error => {
      return throwError(this.handlError(error));
    }));
  }

  private handlError(error) {
    let errorMsg: string;
    if (error.error instanceof ErrorEvent) {
      errorMsg = `Error: ${error.error.message}`;
    } else {
      errorMsg = this.getServerErrorMessage(error);
    }
    return errorMsg;
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 404: {
        return `Not Found: ${error.message}`;
      }
      case 403: {
        return `Access Denied: ${error.error.message}`;
      }
      case 400: {
        return `Bad Request: ${error.error.message}`;
      }
      case 500: {
        return `Internal Server Error: ${error.error.message}`;
      }
      default: {
        return `Unknown Server Error: ${error.message}`;
      }

    }
  }

}
