import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators';
import { throwError } from 'rxjs';
import { UtilService } from './util.service';
import { Biller } from '../model/Biller.model';
import { Constant } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class BillerService {

  protocol = UtilService.getFromLocalStorage(Constant.protocolStorage);
  ip = UtilService.getFromLocalStorage(Constant.ipStorage);
  port = UtilService.getFromLocalStorage(Constant.portStorage);
  path = UtilService.getFromLocalStorage(Constant.pathStorage);
  baseUrl = this.protocol + "://" + this.ip + ":" + this.port + this.path;
  biller = UtilService.getObjectFromLocalStorage(Constant.billerStorage);

  constructor(private http: HttpClient) { }

  getBillers() {
    let billersPath = this.biller ? this.biller.path : '';
    let url = this.baseUrl + billersPath;
    return this.http.get<[]>(url).pipe(
      catchError(
        error => {
          return throwError(UtilService.getServerErrorMessage(error));
        }
      )
    );
  }

}
