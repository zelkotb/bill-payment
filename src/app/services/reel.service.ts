import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../constant';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { Field } from '../model/Field.model';
import { catchError } from 'rxjs/internal/operators';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class ReelService {

  baseUrl = environment.urlContext;

  constructor(private http: HttpClient) { }

  getForm(creancierId, creanceId): Observable<Field[]> {
    let url = this.baseUrl + creancierId + "/" + creanceId + "/form";
    return this.http.get<Field[]>(url).pipe(
      catchError(
        error => throwError(UtilService.getServerErrorMessage(error))
      )
    )
  }

  getDebts(creancierId: string) {
    let url = this.baseUrl + "creances/creanciers/" + creancierId;
    return this.http.get<[]>(url).pipe(
      catchError(
        error => {
          return throwError(UtilService.getServerErrorMessage(error));
        }
      )
    );
  }
}
