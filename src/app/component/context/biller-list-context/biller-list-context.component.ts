import { Component, OnInit } from '@angular/core';
import { Biller } from 'src/app/model/Biller.model';
import { ContextService } from 'src/app/services/context.service';
import { UtilService } from 'src/app/services/util.service';
import { Constant } from '../../../constant';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'biller-list-context',
  templateUrl: './biller-list-context.component.html',
  styleUrls: ['./biller-list-context.component.css']
})
export class BillerListContextComponent implements OnInit {

  hint: string = "* obligatoire";
  biller: Biller = new Biller();
  loading: boolean = false;
  error;
  valid: boolean = false;

  constructor(private contextService: ContextService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getBiller();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2500,
      panelClass: ['blue-snackbar']
    });
  }

  getBiller() {
    this.loading = true;
    this.contextService.getBillerContext(Constant.company)
      .subscribe(
        data => {
          if (data != null) {
            this.biller = data
            UtilService.addObjectToLocalStorage(Constant.billerStorage, this.biller);
            this.validatePathPattern(this.biller.path);
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

  onSubmit() {
    this.loading = true;
    this.contextService.saveBillerContext(
      Constant.company,
      this.biller).subscribe(
        data => {
          this.biller = data;
          UtilService.addObjectToLocalStorage(Constant.billerStorage, this.biller);
          this.loading = false;
          this.openSnackBar(Constant.contextSuccesMessage, "updated");
        },
        error => {
          this.error = error;
          this.loading = false;
        }
      )
  }

  validatePath($event) {
    this.validatePathPattern($event);
  }

}
