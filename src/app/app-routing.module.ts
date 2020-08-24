import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillerPageComponent } from './page/biller-page/biller-page.component';
import { ContextPageComponent } from './page/context-page/context-page.component';
import { ContextInfoPageComponent } from './page/context-info-page/context-info-page.component';

import { ContextGuard } from './guards/context.guard';
import { BillerListGuard } from './guards/biller-list.guard';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
