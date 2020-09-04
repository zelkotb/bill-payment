import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../constant';
import { UtilService } from './util.service';
import { catchError } from 'rxjs/internal/operators';
import { throwError, Observable } from 'rxjs';
import { Field } from '../model/Field.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  baseUrl = Constant.baseUrl;

  constructor(private http: HttpClient) { }

  getForm(creancierId, creanceId): Observable<Field[]> {
    return this.http.get<Field[]>(this.baseUrl + "/" + creancierId + "/" + creanceId + "/form").pipe(
      catchError(
        error => throwError(UtilService.getServerErrorMessage(error))
      )
    )
  }
}
