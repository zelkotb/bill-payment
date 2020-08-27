import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { RequestVariable } from '../model/RequestVariable.model';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  static addToLocalStorage(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  static addObjectToLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getFromLocalStorage(key: string): any {
    return localStorage.getItem(key);
  }

  static getObjectFromLocalStorage(key: string): any {
    var item = localStorage.getItem(key);
    return JSON.parse(item);
  }

  static deleteFromLocalStorage(key: string) {
    localStorage.removeItem(key);
  }

  static clearLocalStorage() {
    localStorage.clear();
  }

  static extractPathVariables(path: string) {
    let done = false;
    let params: string[] = [];
    while (path.length > 0 && !done) {
      if (path.indexOf("{") != -1) {
        params.push(path.substring(path.indexOf("{") + 1, path.indexOf("}")));
        path = path.substring(path.indexOf("}") + 1);
      } else {
        done = true;
      }
    }
    return params;
  }

  static buildPath(path: string, variables: string[]) {
    let params = UtilService.extractPathVariables(path);
    if (params.length != variables.length) {
      path = "error : " + params.length + " : " + variables.length;
    } else {
      for (let i = 0; i < params.length; i++) {
        path = path.replace("{" + params[i] + "}", variables[i]);
      }
    }
    return path;
  }

  static addRequestVariableToPath(path: string, variables: RequestVariable[]) {
    path = path + "?";
    variables.forEach(variable => {
      path = path + variable.name + "=" + variable.variableValue + "&";
    });
    return path;
  }

  static getServerErrorMessage(error: HttpErrorResponse): string {
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
