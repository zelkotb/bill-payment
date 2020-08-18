import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillerListComponent } from './component/biller-list/biller-list.component';
import { BillerPageComponent } from './page/biller-page/biller-page.component';

const routes: Routes = [
  { path: 'creanciers', component: BillerPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
