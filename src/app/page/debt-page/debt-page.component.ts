import { Component, OnInit } from '@angular/core';
import { DebtService } from 'src/app/services/debt.service';
import { ContextService } from 'src/app/services/context.service';
import { Debt } from 'src/app/model/Debt.model';
import { UtilService } from 'src/app/services/util.service';
import { Constant } from 'src/app/constant';
import { ActivatedRoute } from '@angular/router';
import { ReelService } from 'src/app/services/reel.service';

@Component({
  selector: 'debt-page',
  templateUrl: './debt-page.component.html',
  styleUrls: ['./debt-page.component.css'],
})
export class DebtPageComponent implements OnInit {

  debtList = [];
  loading = false;
  error;
  debtContext: Debt = UtilService.getObjectFromLocalStorage(Constant.debtStorage);
  code: string;
  private sub: any;
  isListEmpty: string;
  reelDebtList = [];

  constructor(private debtService: DebtService, private contextService: ContextService,
    private route: ActivatedRoute, private reelService: ReelService) { }

  ngOnInit(): void {
    this.getDebts();
    this.getReelDebts();
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

  private getReelDebts() {
    this.loading = true;
    this.sub = this.route.params.subscribe(params => {
      this.code = params['code'];
    });
    this.reelService.getDebts(this.code).subscribe(data => {
      this.reelDebtList = data;
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
