import { Component, OnInit, Input } from '@angular/core';
import { Biller } from 'src/app/model/Biller.model';
import { Router } from '@angular/router';

@Component({
  selector: 'biller-card',
  templateUrl: './biller-card.component.html',
  styleUrls: ['./biller-card.component.css']
})
export class BillerCardComponent implements OnInit {

  @Input() biller;
  @Input() billerContext: Biller;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDebtPage(codeCreancier) {
    this.router.navigate(['/creanciers/' + codeCreancier]);
  }

}
