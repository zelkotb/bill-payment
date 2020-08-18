import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'biller-card',
  templateUrl: './biller-card.component.html',
  styleUrls: ['./biller-card.component.css']
})
export class BillerCardComponent implements OnInit {

  @Input() biller;
  constructor() { }

  ngOnInit(): void {
  }

}
