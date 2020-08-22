import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillerListComponent } from './component/biller-list/biller-list.component';
import { BillerPageComponent } from './page/biller-page/biller-page.component';
import { ContextPageComponent } from './page/context-page/context-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/context', pathMatch: 'full' },
  { path: 'context', component: ContextPageComponent },
  { path: 'creanciers', component: BillerPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
