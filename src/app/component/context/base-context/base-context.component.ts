import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company.model';
import { ContextService } from 'src/app/services/context.service';
import { Constant } from 'src/app/constant';
import { UtilService } from 'src/app/services/util.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'base-context',
  templateUrl: './base-context.component.html',
  styleUrls: ['./base-context.component.css']
})
export class BaseContextComponent implements OnInit {

  hint: string = "* obligatoire";
  company: Company = new Company();
  loading: boolean = false;
  error;
  private sub: any;
  private sub2: any;

  constructor(private contextService: ContextService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getCompany();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.sub2?.unsubscribe();
  }

  getCompany() {
    this.loading = true;
    this.sub = this.contextService.getCompany(UtilService.getFromLocalStorage(Constant.company))
      .subscribe(
        data => {
          if (data != null) {
            this.company = data
            UtilService.addToLocalStorage(
              Constant.url,
              UtilService.buildUrl(data.protocol, data.ip, data.port, data.path)
            )
          }
          this.loading = false;
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2500,
      panelClass: ['blue-snackbar']
    });
  }

  onSubmit() {
    this.loading = true;
    this.sub2 = this.contextService.saveCompany(
      UtilService.getFromLocalStorage(Constant.company),
      this.company).subscribe(
        data => {
          this.company = data;
          UtilService.addToLocalStorage(
            Constant.url,
            UtilService.buildUrl(data.protocol, data.ip, data.port, data.path)
          )
          this.loading = false;
          this.openSnackBar(Constant.contextSuccesMessage, "updated");
        },
        error => {
          this.error = error;
          this.loading = false;
        }
      )
  }

}
