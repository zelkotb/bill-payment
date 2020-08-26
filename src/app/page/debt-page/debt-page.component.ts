import { Component, OnInit } from '@angular/core';
import { ContextService } from 'src/app/services/context.service';

@Component({
  selector: 'debt-page',
  templateUrl: './debt-page.component.html',
  styleUrls: ['./debt-page.component.css']
})
export class DebtPageComponent implements OnInit {

  debtList = [];
  loading = false;
  error;

  constructor() { }

  ngOnInit(): void {
  }

}
