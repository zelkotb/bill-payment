import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillerListComponent } from './component/biller-list/biller-list.component';
import { BillerPageComponent } from './page/biller-page/biller-page.component';
import { BillerCardComponent } from './component/biller-card/biller-card.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './component/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    BillerListComponent,
    BillerPageComponent,
    BillerCardComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
