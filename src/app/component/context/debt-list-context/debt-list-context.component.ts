import { Component, OnInit } from '@angular/core';
import { ContextService } from 'src/app/services/context.service';
import { Debt } from 'src/app/model/Debt.model';
import { UtilService } from 'src/app/services/util.service';
import { Constant } from 'src/app/constant';
import { RequestVariable } from 'src/app/model/RequestVariable.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'debt-list-context',
  templateUrl: './debt-list-context.component.html',
  styleUrls: ['./debt-list-context.component.css']
})
export class DebtListContextComponent implements OnInit {

  hint: string = "* obligatoire";
  debt: Debt = new Debt();
  loading: boolean = false;
  error;
  valid: boolean = false;

  constructor(private contextService: ContextService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getDebt();
  }

  getDebt() {
    this.loading = true;
    this.contextService.getDebtContext(Constant.company)
      .subscribe(
        data => {
          if (data != null) {
            this.debt = data
            UtilService.addObjectToLocalStorage(Constant.debtStorage, this.debt);
            this.validatePathPattern(this.debt.path);
          }
          this.loading = false;
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

  private validatePathPattern(path) {
    this.valid = Constant.pathRegex.test(path);
  }

  validatePath($event) {
    this.validatePathPattern($event);
  }

  addRequestVariable() {
    let requestVariable = new RequestVariable();
    this.debt.requestVariables.push(requestVariable);
    console.log(this.debt);
  }

  deleteRequestVariable(i) {
    this.debt.requestVariables.splice(i, 1);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2500,
      panelClass: ['blue-snackbar']
    });
  }

  onSubmit() {
    this.loading = true;
    this.contextService.saveDebtContext(
      Constant.company,
      this.debt).subscribe(
        data => {
          this.debt = data;
          UtilService.addObjectToLocalStorage(Constant.debtStorage, this.debt);
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
