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
  billerContext: Biller = UtilService.getObjectFromLocalStorage(Constant.billerStorage);
  constructor(private billerService: BillerService, private contextService: ContextService) { }

  ngOnInit(): void {
    this.getBillers();
  }

  getIconByCategory(category: string) {

    return category ? category.replace(/\s/g, "") + ".svg" : category;
  }

  private getBillers() {
    this.loading = true;
    this.billerService.getBillers().subscribe(data => {
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
