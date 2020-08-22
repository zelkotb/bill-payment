import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators';
import { throwError } from 'rxjs';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class BillerService {

  protocol = UtilService.getFromLocalStorage('protocol');
  ip = UtilService.getFromLocalStorage('ip');
  port = UtilService.getFromLocalStorage('port');
  path = UtilService.getFromLocalStorage('path');
  baseUrl = this.protocol + "://" + this.ip + ":" + this.port + this.path;;

  constructor(private http: HttpClient) { }

  getBillers() {
    let url = this.baseUrl + "/creanciers";
    return this.http.get<[]>(url).pipe(
      catchError(
        error => {
          return throwError(UtilService.getServerErrorMessage(error));
        }
      )
    );
  }

}
