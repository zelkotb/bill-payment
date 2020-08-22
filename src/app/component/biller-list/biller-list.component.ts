import { Component, OnInit, Input } from '@angular/core';
import { Biller } from 'src/app/model/Biller.model';

@Component({
  selector: 'biller-list',
  templateUrl: './biller-list.component.html',
  styleUrls: ['./biller-list.component.css']
})
export class BillerListComponent implements OnInit {

  @Input() billerList;
  @Input() billerContext: Biller;
  constructor() { }

  ngOnInit(): void {
  }

}
