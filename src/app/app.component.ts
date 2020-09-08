import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from './services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, public utilService: UtilService) {
  }
  title = 'bills-payment';
  ngOnInit() {
  }

  isActive(url: string, exact: boolean): boolean {
    return this.router.isActive(url, exact);
  }

  logout() {
    window.location.reload();
    this.router.navigate(['/context']);
  }


}
