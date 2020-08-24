import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'context-info-page',
  templateUrl: './context-info-page.component.html',
  styleUrls: ['./context-info-page.component.css']
})
export class ContextInfoPageComponent implements OnInit {

  companyName: string = UtilService.getFromLocalStorage("company");

  constructor() { }

  ngOnInit(): void {
  }

}
