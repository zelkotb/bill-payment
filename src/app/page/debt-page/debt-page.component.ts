import { Component, OnInit } from '@angular/core';
import { DebtService } from 'src/app/services/debt.service';
import { ContextService } from 'src/app/services/context.service';
import { Debt } from 'src/app/model/Debt.model';
import { UtilService } from 'src/app/services/util.service';
import { Constant } from 'src/app/constant';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'debt-page',
  templateUrl: './debt-page.component.html',
  styleUrls: ['./debt-page.component.css']
})
export class DebtPageComponent implements OnInit {

  debtList = [];
  loading = false;
  error;
  debtContext: Debt = UtilService.getObjectFromLocalStorage(Constant.debtStorage);
  code: string;
  private sub: any;
  isListEmpty: string;

  constructor(private debtService: DebtService, private contextService: ContextService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDebts();
  }


  private getDebts() {
    this.loading = true;
    this.sub = this.route.params.subscribe(params => {
      this.code = params['code'];
    });
    this.debtService.getDebts(this.code).subscribe(data => {
      this.debtList = data;
      this.loading = false;
    }, error => {
      this.error = error;
      this.loading = false;
    }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  isEmpty() {
    this.isListEmpty = undefined;
    if (this.debtList.length == 0) {
      this.isListEmpty = "La Liste des services pour le créancier demandé est vide";
      return true;
    }
    return false;
  }

}
