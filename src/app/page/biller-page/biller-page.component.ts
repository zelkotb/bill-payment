import { Component, OnInit } from '@angular/core';
import { BillerService } from '../../services/biller.service';

@Component({
  selector: 'biller-page',
  templateUrl: './biller-page.component.html',
  styleUrls: ['./biller-page.component.css']
})
export class BillerPageComponent implements OnInit {

  categoryList = [];
  billerList = [];
  constructor(private billerService: BillerService) { }

  ngOnInit(): void {
    this.getBillers();
  }

  private getBillers() {
    this.billerService.getBillers().subscribe(data => this.billerList = data, error => console.log(error));
  }

  filterBillerByCategory(c) {
    return this.billerList.filter(b => b.category == c);
  }

  findAllCategories() {
    for (let i = 0; i < this.billerList.length; i++) {
      if (this.categoryList.indexOf(this.billerList[i].category) === -1) {
        this.categoryList.push(this.billerList[i].category);
      }
    }
    return this.categoryList;
  }

}
