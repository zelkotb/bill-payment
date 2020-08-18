import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'biller-list',
  templateUrl: './biller-list.component.html',
  styleUrls: ['./biller-list.component.css']
})
export class BillerListComponent implements OnInit {

  @Input() billerList;
  constructor() { }

  ngOnInit(): void {
  }

}
