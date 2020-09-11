import { Component, OnInit } from '@angular/core';
import { ContextService } from '../../services/context.service';
import { Company } from 'src/app/model/company.model';
import { UtilService } from '../../services/util.service';
import { Router } from '@angular/router';
import { Constant } from 'src/app/constant';

@Component({
  selector: 'context-page',
  templateUrl: './context-page.component.html',
  styleUrls: ['./context-page.component.css']
})
export class ContextPageComponent implements OnInit {

  company: string = "";
  loading: boolean = false;
  error = '';
  private sub: any;
  constructor(private contextService: ContextService, private router: Router,
    private utilService: UtilService,) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  getClientInfo() {
    if (this.company != "") {
      this.loading = true;
      this.sub = this.contextService.getCompany(this.company).subscribe(
        data => {
          UtilService.addToLocalStorage(Constant.company, data.name);
          UtilService.addToLocalStorage(
            Constant.url,
            UtilService.buildUrl(data.protocol, data.ip, data.port, data.path)
          );
          this.loading = false;
          this.router.navigate(['/context/info']);
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
