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

  baseUrl = UtilService.getFromLocalStorage(Constant.url);
  field = UtilService.getObjectFromLocalStorage(Constant.fieldStorage);

  constructor(private http: HttpClient) { }

  getForm(creancierId, creanceId): Observable<Field[]> {
    let variables: Map<string, string> = new Map();
    variables.set(this.field.creancierId, creancierId);
    variables.set(this.field.creanceId, creanceId);
    let formPath: string = this.field ? this.field.path : '';
    formPath = UtilService.buildPath(formPath, variables);
    formPath = UtilService.addRequestVariableToPath(formPath, this.field.requestVariables);
    let url = this.baseUrl + formPath;
    if (formPath.includes("error :")) {
      return throwError(
        Constant.pathVariableErrorMessage +
        " {      On a trouvé : " + formPath.split(":")[1]
        + " on attend : " + formPath.split(":")[2]
        + " }, SVP Verifier votre context ou contacter l'administrateur");
    }
    return this.http.get<Field[]>(url).pipe(
      catchError(
        error => throwError(UtilService.getServerErrorMessage(error))
      )
    )
  }
}
