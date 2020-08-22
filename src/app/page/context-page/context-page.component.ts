import { Component, OnInit } from '@angular/core';
import { ContextService } from '../../services/context.service';
import { Company } from 'src/app/model/company.model';
import { UtilService } from '../../services/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'context-page',
  templateUrl: './context-page.component.html',
  styleUrls: ['./context-page.component.css']
})
export class ContextPageComponent implements OnInit {

  company: string = "";
  loading: boolean = false;
  error = '';
  constructor(private contextService: ContextService, private router: Router) { }

  ngOnInit(): void {
    UtilService.clearLocalStorage();
  }

  getClientInfo() {
    if (this.company != "") {
      this.loading = true;
      this.contextService.getCompany(this.company).subscribe(
        data => {
          UtilService.addToLocalStorage("company", data.name);
          UtilService.addToLocalStorage("protocol", data.protocol);
          UtilService.addToLocalStorage("ip", data.ip);
          UtilService.addToLocalStorage("port", data.port);
          UtilService.addToLocalStorage("path", data.path);
          this.loading = false;
          this.router.navigate(['/creanciers']);
        },
        error => {
          this.error = error;
          this.loading = false;
        }
      )
    }
  }

  initError() {
    this.error = '';
  }

}
