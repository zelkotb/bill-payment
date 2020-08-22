import { Component, OnInit, Input } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ContextService } from 'src/app/services/context.service';
import { Company } from 'src/app/model/company.model';
import { Biller } from 'src/app/model/Biller.model';

@Component({
  selector: 'biller-card',
  templateUrl: './biller-card.component.html',
  styleUrls: ['./biller-card.component.css']
})
export class BillerCardComponent implements OnInit {

  @Input() biller;
  @Input() billerContext: Biller;

  constructor() { }

  ngOnInit(): void {
  }

}
