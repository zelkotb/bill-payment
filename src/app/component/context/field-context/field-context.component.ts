import { Component, OnInit } from '@angular/core';
import { ContextService } from 'src/app/services/context.service';
import { Field } from 'src/app/model/Field.model';
import { Constant } from 'src/app/constant';
import { UtilService } from 'src/app/services/util.service';
import { RequestVariable } from 'src/app/model/RequestVariable.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { transition, style, animate, state, trigger } from '@angular/animations';

@Component({
  selector: 'field-context',
  templateUrl: './field-context.component.html',
  styleUrls: ['./field-context.component.css']
})
export class FieldContextComponent implements OnInit {

  hint: string = Constant.hintMondatoryMessage;
  hintOptional: string = Constant.hintOptionalMessage;
  field: Field = new Field();
  loading: boolean = false;
  error;
  valid: boolean = false;

  constructor(private contextservice: ContextService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getField();
  }

  getField() {
    this.loading = true;
    this.contextservice.getFieldContext(Constant.company)
      .subscribe(
        data => {
          if (data != null) {
            this.field = data
            UtilService.addObjectToLocalStorage(Constant.fieldStorage, this.field);
            this.validatePathPattern(this.field.path);
          }
          this.loading = false;
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

  validatePathPattern(path) {
    this.valid = Constant.pathRegex.test(path);
  }

  validatePath($event) {
    this.validatePathPattern($event);
  }

  addRequestVariable() {
    let requestVariable = new RequestVariable('', '');
    this.field.requestVariables.push(requestVariable);
  }

  deleteRequestVariable(i) {
    this.field.requestVariables.splice(i, 1);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2500,
      panelClass: ['blue-snackbar']
    });
  }

  onSubmit() {
    this.loading = true;
    this.contextservice.saveFieldContext(
      Constant.company,
      this.field).subscribe(
        data => {
          this.field = data;
          UtilService.addObjectToLocalStorage(Constant.fieldStorage, this.field);
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
