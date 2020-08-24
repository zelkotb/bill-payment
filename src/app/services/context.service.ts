import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators';
import { throwError, Observable } from 'rxjs';
import { UtilService } from './util.service';
import { Company } from '../model/company.model';
import { Biller } from '../model/Biller.model';
import { Constant } from '../constant';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': Constant.applicationJson,
  })
};

@Injectable({
  providedIn: 'root'
})
export class ContextService {


  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getCompany(name: string): Observable<Company> {
    return this.http.get<Company>(this.baseUrl + "EFFYIS/api/context/companies/company/" + name).pipe(
      catchError(
        error => {
          return throwError(UtilService.getServerErrorMessage(error));
        }
      )
    );
  }

  getBillerContext(name: string): Observable<Biller> {
    return this.http.get<Biller>(this.baseUrl + "EFFYIS/api/context/companies/company/" + name + "/biller").pipe(
      catchError(
        error => {
          return throwError(UtilService.getServerErrorMessage(error));
        }
      )
    );
  }

  saveBillerContext(name: string, biller: Biller): Observable<Biller> {
    return this.http.post<Biller>(
      this.baseUrl + "EFFYIS/api/context/companies/company/" + name + "/biller",
      biller,
      httpOptions
    ).pipe(
      catchError(
        error => {
          return throwError(UtilService.getServerErrorMessage(error));
        }
      )
    );
  }

}
