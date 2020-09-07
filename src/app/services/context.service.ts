import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators';
import { throwError, Observable } from 'rxjs';
import { UtilService } from './util.service';
import { Company } from '../model/company.model';
import { Biller } from '../model/Biller.model';
import { Debt } from '../model/Debt.model';
import { Constant } from '../constant';
import { Field } from '../model/Field.model';

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
    return this.http.get<Company>(this.baseUrl + "companies/company/" + name).pipe(
      catchError(
        error => {
          return throwError(UtilService.getServerErrorMessage(error));
        }
      )
    );
  }

  saveCompany(name: string, company: Company): Observable<Company> {
    return this.http.post<Company>(
      this.baseUrl + "companies/company/" + name,
      company,
      httpOptions
    ).pipe(
      catchError(
        error => {
          return throwError(UtilService.getServerErrorMessage(error));
        }
      )
    );
  }

  getBillerContext(name: string): Observable<Biller> {
    return this.http.get<Biller>(this.baseUrl + "companies/company/" + name + "/biller").pipe(
      catchError(
        error => {
          return throwError(UtilService.getServerErrorMessage(error));
        }
      )
    );
  }

  saveBillerContext(name: string, biller: Biller): Observable<Biller> {
    return this.http.post<Biller>(
      this.baseUrl + "companies/company/" + name + "/biller",
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

  getDebtContext(name: string): Observable<Debt> {
    return this.http.get<Debt>(this.baseUrl + "companies/company/" + name + "/debt").pipe(
      catchError(
        error => {
          return throwError(UtilService.getServerErrorMessage(error));
        }
      )
    );
  }

  saveDebtContext(name: string, debt: Debt): Observable<Debt> {
    return this.http.post<Debt>(
      this.baseUrl + "companies/company/" + name + "/debt",
      debt,
      httpOptions
    ).pipe(
      catchError(
        error => {
          return throwError(UtilService.getServerErrorMessage(error));
        }
      )
    );
  }

  deleteRequestVariable(id: number): Observable<Debt> {
    return this.http.delete<Debt>(
      this.baseUrl + "requestVariables/" + id
    ).pipe(
      catchError(
        error => {
          return throwError(UtilService.getServerErrorMessage(error));
        }
      )
    );
  }

  getFieldContext(name: string): Observable<Field> {
    return this.http.get<Field>(this.baseUrl + "companies/company/" + name + "/field").pipe(
      catchError(
        error => {
          return throwError(UtilService.getServerErrorMessage(error));
        }
      )
    );
  }

  saveFieldContext(name: string, field: Field): Observable<Field> {
    return this.http.post<Field>(
      this.baseUrl + "companies/company/" + name + "/field",
      field,
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
