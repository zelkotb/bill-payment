import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

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
