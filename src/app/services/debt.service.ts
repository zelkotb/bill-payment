import { Injectable } from '@angular/core';
import { Constant } from '../constant';
import { UtilService } from './util.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DebtService {

  baseUrl = Constant.baseUrl;
  debt = UtilService.getObjectFromLocalStorage(Constant.debtStorage);

  constructor(private http: HttpClient) { }

  getDebts(creancierId: string) {
    let variables: string[] = [creancierId];
    let debtsPath: string = this.debt ? this.debt.path : '';
    debtsPath = UtilService.buildPath(debtsPath, variables);
    debtsPath = UtilService.addRequestVariableToPath(debtsPath, this.debt.requestVariables);
    let url = this.baseUrl + debtsPath;
    if (debtsPath.includes("error")) {
      return throwError(
        Constant.pathVariableErrorMessage +
        " {      On a trouvé : " + debtsPath.split(":")[1]
        + " on attend : " + debtsPath.split(":")[2]
        + " }, SVP Verifier votre context ou contacter l'administrateur");
    }
    return this.http.get<[]>(url).pipe(
      catchError(
        error => {
          return throwError(UtilService.getServerErrorMessage(error));
        }
      )
    );
  }

}
