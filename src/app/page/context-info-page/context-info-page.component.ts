import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/constant';

@Component({
  selector: 'context-info-page',
  templateUrl: './context-info-page.component.html',
  styleUrls: ['./context-info-page.component.css']
})
export class ContextInfoPageComponent implements OnInit {

  companyName: string = Constant.company;

  constructor() { }

  ngOnInit(): void {
  }

}
