import { Component, OnInit } from '@angular/core';
import { BillerService } from '../../services/biller.service';
import { ContextService } from 'src/app/services/context.service';
import { UtilService } from 'src/app/services/util.service';
import { Biller } from 'src/app/model/Biller.model';
import { Constant } from 'src/app/constant';

@Component({
  selector: 'biller-page',
  templateUrl: './biller-page.component.html',
  styleUrls: ['./biller-page.component.css']
})
export class BillerPageComponent implements OnInit {

  categoryList = [];
  billerList = [];
  loading = false;
  error;
  private sub: any;
  reload = '0';
  billerContext: Biller = UtilService.getObjectFromLocalStorage(Constant.billerStorage);
  constructor(private billerService: BillerService, private contextService: ContextService) { }

  ngOnInit(): void {
    if (UtilService.getFromLocalStorage("reload") === null || UtilService.getFromLocalStorage("reload") === '1') {
      this.getBillers();
      UtilService.addToLocalStorage("reload", '0');
    } else {
      UtilService.addToLocalStorage("reload", '1');
      window.location.reload();
    }
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  getIconByCategory(category: string) {

    return category ? category.replace(/\s/g, "") + ".svg" : category;
  }

  private getBillers() {
    this.loading = true;
    this.sub = this.billerService.getBillers().subscribe(data => {
      this.billerList = data;
      this.loading = false;
    }, error => {
      this.error = error;
      this.loading = false;
    }
    );
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
