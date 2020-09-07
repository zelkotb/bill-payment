import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContextPageComponent } from './page/context-page/context-page.component';
import { ContextInfoPageComponent } from './page/context-info-page/context-info-page.component';
import { BillerPageComponent } from './page/biller-page/biller-page.component';
import { DebtPageComponent } from './page/debt-page/debt-page.component';
import { FormPageComponent } from './page/form-page/form-page.component';

import { ContextGuard } from './guards/context.guard';
import { BillerListGuard } from './guards/biller-list.guard';
import { DebtListGuard } from './guards/debt-list.guard';
import { FormGuard } from './guards/form.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/context',
    pathMatch: 'full'
  },
  {
    path: 'context',
    component: ContextPageComponent
  },
  {
    path: 'context/info',
    component: ContextInfoPageComponent,
    canActivate: [ContextGuard]
  },
  {
    path: 'creanciers',
    component: BillerPageComponent,
    canActivate: [BillerListGuard]
  },
  {
    path: 'creanciers/:code',
    component: DebtPageComponent,
    canActivate: [DebtListGuard]
  },
  {
    path: 'creanciers/:code/:codeCreance',
    component: FormPageComponent,
    canActivate: [FormGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
