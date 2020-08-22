import { Component, OnInit } from '@angular/core';
import { BillerService } from '../../services/biller.service';
import { ContextService } from 'src/app/services/context.service';
import { UtilService } from 'src/app/services/util.service';
import { Company } from 'src/app/model/company.model';
import { Biller } from 'src/app/model/Biller.model';

@Component({
  selector: 'biller-page',
  templateUrl: './biller-page.component.html',
  styleUrls: ['./biller-page.component.css']
})
export class BillerPageComponent implements OnInit {

  categoryList = [];
  billerList = [];
  loading1 = false;
  loading2 = false;
  error;
  billerContext: Biller;
  constructor(private billerService: BillerService, private contextService: ContextService) { }

  ngOnInit(): void {
    this.getBillers();
    this.getContextInto();
  }

  getIconByCategory(category: string) {
    return category.replace(/\s/g, "") + ".svg";
  }

  private getBillers() {
    this.loading1 = true;
    this.billerService.getBillers().subscribe(data => {
      this.billerList = data;
      this.loading1 = false;
    }, error => {
      this.error = error;
      this.loading1 = false;
    }
    );
  }

  private getContextInto() {
    this.loading2 = true;
    this.contextService.getBillerContext(UtilService.getFromLocalStorage("company")).subscribe(
      data => {
        this.billerContext = data;
        this.loading2 = false;
      }
    )
  }

  calculateLoading() {
    return this.loading1 || this.loading2;
  }

  filterBillerByCategory(c) {
    return this.billerList.filter(b => b[this.billerContext.category] == c);
  }

  findAllCategories() {
    for (let i = 0; i < this.billerList.length; i++) {
      if (this.categoryList.indexOf(this.billerList[i][this.billerContext.category]) === -1) {
        this.categoryList.push(this.billerList[i][this.billerContext.category]);
      }
    }
    return this.categoryList;
  }

}
